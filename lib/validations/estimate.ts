import { z } from 'zod'

/**
 * Zod validation schema for estimate request form
 * Used for both client-side and server-side validation
 */
export const estimateRequestSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address'),
  
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Phone number can only contain digits, spaces, hyphens, plus signs, and parentheses'),
  
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .optional()
    .or(z.literal('')),
  
  service: z
    .string()
    .min(1, 'Please select a service'),
  
  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional()
    .or(z.literal('')),
  
  preferredContact: z
    .enum(['phone', 'email'])
    .optional(),
})

export type EstimateRequestInput = z.infer<typeof estimateRequestSchema>

/**
 * Sanitize and normalize estimate request data
 */
export function sanitizeEstimateRequest(data: EstimateRequestInput): EstimateRequestInput {
  return {
    ...data,
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    phone: data.phone.replace(/[^\d+]/g, ''),
    address: data.address?.trim() || undefined,
    service: data.service.trim(),
    message: data.message?.trim() || undefined,
    preferredContact: data.preferredContact || 'phone',
  }
}
