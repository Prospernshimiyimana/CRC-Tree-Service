import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { estimateRequestSchema, sanitizeEstimateRequest } from '@/lib/validations/estimate'
import { sendEstimateEmails, isEmailConfigured } from '@/lib/email'

/**
 * POST /api/estimate
 * 
 * Handles estimate request submissions from the contact form.
 * Validates input data using Zod, stores in PostgreSQL, and sends email notifications.
 * 
 * Flow:
 * 1. Receive and validate request data
 * 2. Save to database
 * 3. Send owner notification email
 * 4. Send customer confirmation email
 * 5. Return success response
 * 
 * Request body:
 * - name: string (required, min 2 chars)
 * - email: string (required, valid email)
 * - phone: string (required, min 10 digits)
 * - address: string (optional)
 * - service: string (required)
 * - message: string (optional)
 * - preferredContact: 'phone' | 'email' (optional)
 * 
 * Response:
 * - 201: Success (estimate saved, emails sent or queued)
 * - 400: Validation error
 * - 500: Server error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Step 1: Validate incoming data using Zod schema
    const validatedData = estimateRequestSchema.parse(body)

    // Step 2: Sanitize and normalize the data
    const sanitizedData = sanitizeEstimateRequest(validatedData)

    // Step 3: Save estimate request to database
    const estimateRequest = await prisma.estimateRequest.create({
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        address: sanitizedData.address,
        service: sanitizedData.service,
        message: sanitizedData.message,
        preferredContact: sanitizedData.preferredContact,
      },
    })

    console.log('Estimate request saved to database:', {
      id: estimateRequest.id,
      name: estimateRequest.name,
      email: estimateRequest.email,
      service: estimateRequest.service,
      createdAt: estimateRequest.createdAt,
    })

    // Step 4: Send email notifications (non-blocking, errors don't affect form submission)
    if (isEmailConfigured()) {
      // Send emails in the background - don't await to avoid blocking the response
      sendEstimateEmails({
        id: estimateRequest.id,
        name: estimateRequest.name,
        email: estimateRequest.email,
        phone: estimateRequest.phone,
        address: estimateRequest.address,
        service: estimateRequest.service,
        message: estimateRequest.message,
        preferredContact: estimateRequest.preferredContact,
        createdAt: estimateRequest.createdAt,
      }).catch(error => {
        // Log email errors but don't fail the request
        console.error('Email notification failed for estimate:', estimateRequest.id, error)
      })
    } else {
      console.log('Email notifications skipped - Resend not configured')
    }

    // Step 5: Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Estimate request submitted successfully. We will contact you within 24 hours.',
        data: {
          id: estimateRequest.id,
          name: estimateRequest.name,
          email: estimateRequest.email,
          service: estimateRequest.service,
          createdAt: estimateRequest.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      }))

      console.warn('Validation error for estimate request:', errors)

      return NextResponse.json(
        {
          success: false,
          message: 'Please check your input and try again.',
          errors,
        },
        { status: 400 }
      )
    }

    // Handle database errors
    if (error instanceof Error && error.message.includes('prisma')) {
      console.error('Database error creating estimate request:', error)
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to process your request at this time. Please try again later.',
        },
        { status: 503 }
      )
    }

    // Handle all other errors
    console.error('Unexpected error creating estimate request:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/estimate
 * 
 * Returns API health status and information.
 * This endpoint is useful for monitoring and health checks.
 */
export async function GET() {
  return NextResponse.json({
    name: 'CRC Tree Service Estimate API',
    version: '1.1.0',
    status: 'healthy',
    features: {
      emailNotifications: isEmailConfigured(),
    },
    endpoints: {
      createEstimate: 'POST /api/estimate',
    },
  })
}