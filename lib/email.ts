import { Resend } from 'resend'

// Initialize Resend client
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Company information from environment variables
const COMPANY_INFO = {
  name: process.env.COMPANY_NAME || 'CRC Tree Service',
  phone: process.env.COMPANY_PHONE || '+1 (517) 715-7367',
  email: process.env.COMPANY_EMAIL || 'chavezramos340@gmail.com',
  website: 'https://crctreeservice.com',
}

// Owner email from environment
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'chavezramos340@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@crctreeservice.com'

/**
 * Estimate request data type for email templates
 */
export interface EstimateEmailData {
  id: string
  name: string
  email: string
  phone: string
  address?: string | null
  service: string
  message?: string | null
  preferredContact?: string | null
  createdAt: Date
}

/**
 * Format the service name for display
 */
function formatServiceName(service: string): string {
  const serviceMap: Record<string, string> = {
    'tree-removal': 'Tree Removal',
    'tree-trimming': 'Tree Trimming',
    'stump-grinding': 'Stump Grinding',
    emergency: 'Emergency Tree Service',
    other: 'Other Service',
  }
  return serviceMap[service] || service
}

/**
 * Format date for email display
 */
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

/**
 * Generate HTML email for owner notification
 */
function createOwnerNotificationHTML(data: EstimateEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Estimate Request</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #1a3a2a; background-color: #f0fdf4; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #047857 0%, #065f46 100%); padding: 32px 24px; text-align: center; }
    .header h1 { color: white; font-size: 24px; font-weight: 700; margin-bottom: 4px; }
    .header p { color: #d1fae5; font-size: 14px; }
    .content { padding: 32px 24px; }
    .alert-banner { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin-bottom: 24px; border-radius: 4px; }
    .alert-banner h2 { color: #92400e; font-size: 18px; font-weight: 600; margin-bottom: 4px; }
    .alert-banner p { color: #78350f; font-size: 14px; }
    .section { margin-bottom: 24px; }
    .section h3 { color: #065f46; font-size: 16px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #d1fae5; }
    .field { display: flex; margin-bottom: 8px; }
    .field-label { font-weight: 600; color: #374151; min-width: 140px; }
    .field-value { color: #1f2937; }
    .message-box { background: #f9fafb; padding: 16px; border-radius: 8px; margin-top: 8px; }
    .message-box p { color: #374151; white-space: pre-wrap; }
    .footer { background: #f3f4f6; padding: 24px; text-align: center; }
    .footer p { color: #6b7280; font-size: 12px; margin-bottom: 4px; }
    .footer a { color: #047857; text-decoration: none; }
    .badge { display: inline-block; background: #047857; color: white; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; }
    @media only screen and (max-width: 600px) {
      .container { width: 100%; }
      .header { padding: 24px 16px; }
      .content { padding: 24px 16px; }
      .field { flex-direction: column; }
      .field-label { min-width: auto; margin-bottom: 4px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌳 ${COMPANY_INFO.name}</h1>
      <p>New Estimate Request</p>
    </div>
    
    <div class="content">
      <div class="alert-banner">
        <h2>📋 New Lead Received</h2>
        <p>Request ID: ${data.id} | Submitted: ${formatDate(data.createdAt)}</p>
      </div>

      <div class="section">
        <h3>Customer Information</h3>
        <div class="field">
          <span class="field-label">Name:</span>
          <span class="field-value">${data.name}</span>
        </div>
        <div class="field">
          <span class="field-label">Email:</span>
          <span class="field-value"><a href="mailto:${data.email}" style="color: #047857;">${data.email}</a></span>
        </div>
        <div class="field">
          <span class="field-label">Phone:</span>
          <span class="field-value"><a href="tel:${data.phone}" style="color: #047857;">${data.phone}</a></span>
        </div>
        ${data.address ? `
        <div class="field">
          <span class="field-label">Address:</span>
          <span class="field-value">${data.address}</span>
        </div>` : ''}
      </div>

      <div class="section">
        <h3>Service Request</h3>
        <div class="field">
          <span class="field-label">Service:</span>
          <span class="field-value"><span class="badge">${formatServiceName(data.service)}</span></span>
        </div>
        <div class="field">
          <span class="field-label">Contact Preference:</span>
          <span class="field-value">${data.preferredContact ? data.preferredContact.charAt(0).toUpperCase() + data.preferredContact.slice(1) : 'Not specified'}</span>
        </div>
      </div>

      ${data.message ? `
      <div class="section">
        <h3>Message</h3>
        <div class="message-box">
          <p>${data.message}</p>
        </div>
      </div>` : ''}

      <div class="section">
        <h3>Next Steps</h3>
        <p style="color: #374151; margin-bottom: 12px;">1. Review the customer's request details above.</p>
        <p style="color: #374151; margin-bottom: 12px;">2. Contact the customer via their preferred method (${data.preferredContact || 'phone'}).</p>
        <p style="color: #374151;">3. Schedule an on-site estimate if needed.</p>
      </div>
    </div>

    <div class="footer">
      <p><strong>${COMPANY_INFO.name}</strong></p>
      <p>Phone: <a href="tel:${COMPANY_INFO.phone}">${COMPANY_INFO.phone}</a> | Email: <a href="mailto:${COMPANY_INFO.email}">${COMPANY_INFO.email}</a></p>
      <p style="margin-top: 8px; font-size: 11px;">This email was automatically generated from your website's estimate request form.</p>
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Generate HTML email for customer confirmation
 */
function createCustomerConfirmationHTML(data: EstimateEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estimate Request Confirmation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #1a3a2a; background-color: #f0fdf4; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #047857 0%, #065f46 100%); padding: 40px 24px; text-align: center; }
    .checkmark { width: 64px; height: 64px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 32px; }
    .header h1 { color: white; font-size: 24px; font-weight: 700; }
    .content { padding: 32px 24px; }
    .greeting { font-size: 18px; color: #065f46; margin-bottom: 16px; }
    .message { color: #374151; margin-bottom: 24px; }
    .details-box { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .details-box h3 { color: #047857; font-size: 16px; font-weight: 600; margin-bottom: 12px; }
    .field { display: flex; margin-bottom: 8px; }
    .field-label { font-weight: 600; color: #374151; min-width: 140px; }
    .field-value { color: #1f2937; }
    .info-section { background: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .info-section h3 { color: #065f46; font-size: 16px; font-weight: 600; margin-bottom: 12px; }
    .info-item { display: flex; align-items: center; margin-bottom: 8px; color: #374151; }
    .info-item:last-child { margin-bottom: 0; }
    .cta-button { display: inline-block; background: #f97316; color: white; padding: 14px 32px; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 16px; margin: 16px 0; }
    .footer { background: #f3f4f6; padding: 24px; text-align: center; }
    .footer p { color: #6b7280; font-size: 12px; margin-bottom: 4px; }
    .footer a { color: #047857; text-decoration: none; }
    @media only screen and (max-width: 600px) {
      .container { width: 100%; }
      .header { padding: 32px 16px; }
      .content { padding: 24px 16px; }
      .field { flex-direction: column; }
      .field-label { min-width: auto; margin-bottom: 4px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="checkmark">✓</div>
      <h1>Request Received!</h1>
    </div>
    
    <div class="content">
      <p class="greeting">Hello ${data.name},</p>
      
      <p class="message">
        Thank you for contacting ${COMPANY_INFO.name}! We have successfully received your estimate request for <strong>${formatServiceName(data.service)}</strong>. Our team will review your request and get back to you within <strong>24 hours</strong>.
      </p>

      <div class="details-box">
        <h3>Your Request Summary</h3>
        <div class="field">
          <span class="field-label">Request ID:</span>
          <span class="field-value">${data.id}</span>
        </div>
        <div class="field">
          <span class="field-label">Service:</span>
          <span class="field-value">${formatServiceName(data.service)}</span>
        </div>
        <div class="field">
          <span class="field-label">Submitted:</span>
          <span class="field-value">${formatDate(data.createdAt)}</span>
        </div>
        ${data.preferredContact ? `
        <div class="field">
          <span class="field-label">We'll contact you via:</span>
          <span class="field-value">${data.preferredContact.charAt(0).toUpperCase() + data.preferredContact.slice(1)}</span>
        </div>` : ''}
      </div>

      <div class="info-section">
        <h3>What Happens Next?</h3>
        <p style="color: #374151; margin-bottom: 12px;">1. Our team will review your request details.</p>
        <p style="color: #374151; margin-bottom: 12px;">2. We'll contact you via ${data.preferredContact || 'phone'} to discuss your needs.</p>
        <p style="color: #374151; margin-bottom: 12px;">3. We'll schedule an on-site visit if needed.</p>
        <p style="color: #374151;">4. You'll receive your free estimate promptly.</p>
      </div>

      <div class="info-section">
        <h3>Need Immediate Assistance?</h3>
        <p style="color: #374151; margin-bottom: 16px;">If you have an emergency or need to speak with us right away, please don't hesitate to call:</p>
        <a href="tel:${COMPANY_INFO.phone}" class="cta-button">📞 ${COMPANY_INFO.phone}</a>
      </div>

      <p class="message" style="margin-top: 24px;">
        Thank you for choosing ${COMPANY_INFO.name}. We look forward to serving you!
      </p>
    </div>

    <div class="footer">
      <p><strong>${COMPANY_INFO.name}</strong></p>
      <p> Michigan | Phone: <a href="tel:${COMPANY_INFO.phone}">${COMPANY_INFO.phone}</a></p>
      <p style="margin-top: 8px; font-size: 11px;">© ${new Date().getFullYear()} ${COMPANY_INFO.name}. All rights reserved.</p>
      <p style="margin-top: 4px; font-size: 11px;">You received this email because you submitted an estimate request on our website.</p>
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Send notification email to the business owner
 */
export async function sendOwnerNotificationEmail(data: EstimateEmailData): Promise<void> {
  if (!resend) {
    console.warn('Resend not configured - skipping owner notification email')
    return
  }

  try {
    const subject = `🌳 New Estimate Request - ${formatServiceName(data.service)} - ${data.name}`
    const html = createOwnerNotificationHTML(data)

    const result = await resend.emails.send({
      from: `${COMPANY_INFO.name} <${FROM_EMAIL}>`,
      to: OWNER_EMAIL,
      subject,
      html,
      // Add reply-to for easy response
      replyTo: data.email,
    })

    console.log('Owner notification email sent successfully:', result?.data?.id || result)
  } catch (error) {
    console.error('Failed to send owner notification email:', error)
    // Don't throw - email failure shouldn't break the form submission
  }
}

/**
 * Send confirmation email to the customer
 */
export async function sendCustomerConfirmationEmail(data: EstimateEmailData): Promise<void> {
  if (!resend) {
    console.warn('Resend not configured - skipping customer confirmation email')
    return
  }

  // Validate customer email
  if (!data.email || !data.email.includes('@')) {
    console.warn('Invalid customer email - skipping confirmation')
    return
  }

  try {
    const subject = `We Received Your Estimate Request - ${COMPANY_INFO.name}`
    const html = createCustomerConfirmationHTML(data)

    const result = await resend.emails.send({
      from: `${COMPANY_INFO.name} <${FROM_EMAIL}>`,
      to: data.email,
      subject,
      html,
    })

    console.log('Customer confirmation email sent successfully:', result?.data?.id || result)
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error)
    // Don't throw - email failure shouldn't break the form submission
  }
}

/**
 * Send both emails (owner notification + customer confirmation)
 * This is the main function to call after saving an estimate request
 */
export async function sendEstimateEmails(data: EstimateEmailData): Promise<void> {
  // Send both emails in parallel for better performance
  await Promise.all([
    sendOwnerNotificationEmail(data),
    sendCustomerConfirmationEmail(data),
  ])
}

/**
 * Check if email service is configured
 */
export function isEmailConfigured(): boolean {
  return !!resend && !!process.env.RESEND_API_KEY
}