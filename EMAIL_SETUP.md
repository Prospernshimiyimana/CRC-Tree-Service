# Email Notification System Setup Guide

This guide will help you configure the Resend email service for the Lansing Tree Service estimate request system.

## Overview

When a customer submits an estimate request:
1. The request is saved to PostgreSQL
2. An email notification is sent to the business owner
3. A confirmation email is sent to the customer

## Prerequisites

- A Resend account (free tier available)
- A verified domain in Resend (or use Resend's default domain for testing)

## Step 1: Create Resend Account

1. Go to [Resend.com](https://resend.com)
2. Click "Sign Up" and create an account
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to [Resend Dashboard](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Lansing Tree Service")
4. Copy the API key (starts with `re_`)

## Step 3: Configure Environment Variables

Update your `.env` file with the following:

```env
# Email Configuration (Resend)
RESEND_API_KEY="re_your_actual_api_key_here"

# Owner email - where estimate requests will be sent
OWNER_EMAIL="chavezram05340@gmail.com"

# From email - must be a verified domain in Resend
# For testing, you can use Resend's default domain:
FROM_EMAIL="onboarding@resend.dev"

# For production with your own domain:
# FROM_EMAIL="noreply@crctreeservice.com"

# Company information (optional - has defaults)
COMPANY_NAME="CRC Tree Service"
COMPANY_PHONE="+1 (517) 715-7367"
COMPANY_EMAIL="chavezram05340@gmail.com"
```

## Step 4: Verify Domain (Production)

For production, you should verify your own domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `crctreeservice.com`)
4. Add the DNS records to your domain's DNS settings:
   - MX records
   - TXT records (SPF, DKIM)
5. Wait for DNS propagation (can take up to 48 hours)
6. Once verified, use your domain in `FROM_EMAIL`

## Step 5: Test the Email System

### Test via API

```bash
# Test the API endpoint
curl -X POST http://localhost:3000/api/estimate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "tree-removal",
    "message": "Test message for email notification"
  }'
```

### Check Logs

After submitting a test request, check your server logs:

```bash
# You should see:
# - "Estimate request saved to database"
# - "Owner notification email sent successfully"
# - "Customer confirmation email sent successfully"
```

### Check Email

1. Check the owner's email inbox (and spam folder)
2. Check the customer's email inbox (and spam folder)

## Testing with Resend's Default Domain

For development/testing, you can use Resend's default domain:

```env
FROM_EMAIL="onboarding@resend.dev"
```

**Important:** Emails sent from `onboarding@resend.dev` will include Resend branding and are only for testing.

## Production Best Practices

### 1. Use Your Own Domain

- Verify your domain in Resend
- Use a professional from address (e.g., `noreply@crctreeservice.com`)
- This improves deliverability and branding

### 2. Configure DNS Records

Ensure all DNS records are properly configured:
- SPF (Sender Policy Framework)
- DKIM (DomainKeys Identified Mail)
- DMARC (optional but recommended)

### 3. Monitor Email Delivery

Use Resend's dashboard to monitor:
- Sent emails
- Delivery rates
- Bounces
- Complaints

### 4. Set Up Webhooks (Optional)

Configure webhooks to track:
- Email delivery
- Opens
- Clicks
- Bounces
- Spam complaints

## Troubleshooting

### Emails Not Sending

1. **Check API Key**
   ```bash
   # Verify the API key is set correctly
   echo $RESEND_API_KEY
   ```

2. **Check Resend Dashboard**
   - Go to [Resend Logs](https://resend.com/emails)
   - Look for failed emails and error messages

3. **Check Server Logs**
   ```bash
   # Look for email-related errors
   grep "email" .next/server/app/api/estimate/route.js
   ```

### Emails Going to Spam

1. **Verify your domain** in Resend
2. **Configure DNS records** (SPF, DKIM)
3. **Avoid spam trigger words** in email content
4. **Use a consistent from address**
5. **Monitor your sender reputation** in Resend dashboard

### API Key Issues

If you get "Invalid API key" errors:
1. Regenerate the API key in Resend dashboard
2. Update your `.env` file
3. Restart your server

### Rate Limits

Resend free tier limits:
- 100 emails per day
- 3,000 emails per month

For higher volumes, upgrade to a paid plan.

## Email Templates

The system sends two types of emails:

### 1. Owner Notification Email

**Subject:** `🌳 New Estimate Request - [Service] - [Customer Name]`

**Content:**
- Customer name, email, phone, address
- Requested service
- Message (if provided)
- Preferred contact method
- Next steps for the owner

**Features:**
- Professional HTML design
- Mobile responsive
- Clickable email and phone links
- Company branding

### 2. Customer Confirmation Email

**Subject:** `We Received Your Estimate Request - CRC Tree Service`

**Content:**
- Thank you message
- Request summary (ID, service, date)
- What happens next
- Contact information
- Call-to-action button for immediate assistance

**Features:**
- Friendly, professional design
- Clear expectations
- Mobile responsive
- Company branding

## Security Considerations

### API Key Security

- Never commit API keys to version control
- Use environment variables
- Rotate keys periodically
- Use different keys for development and production

### Email Validation

The system validates email addresses before sending:
- Checks for valid email format
- Skips sending if email is invalid
- Logs validation failures

### Error Handling

- Email failures don't break form submission
- Errors are logged for debugging
- System continues working even if emails fail

## Cost Estimation

### Free Tier (Testing)

- 100 emails/day
- 3,000 emails/month
- Resend branding on emails
- Default domain only

### Paid Plans

- **Pro Plan:** $20/month
  - 3,000 emails/day
  - 50,000 emails/month
  - Custom domain
  - No branding
  - Priority support

- **Enterprise:** Custom pricing
  - Higher volume limits
  - Dedicated IP
  - Advanced analytics

## Monitoring and Analytics

### Resend Dashboard

Access at [resend.com](https://resend.com):
- Sent emails log
- Delivery statistics
- Bounce rates
- Spam complaints
- API usage

### Application Logs

The application logs:
- When emails are sent
- Email delivery errors
- Configuration issues

## Support

### Resend Support

- Documentation: [resend.com/docs](https://resend.com/docs)
- Discord Community: [resend.com/discord](https://resend.com/discord)
- Email Support: support@resend.com

### Application Issues

For issues with the email templates or integration:
1. Check application logs
2. Verify environment variables
3. Test with Resend's API directly
4. Contact the development team

## Quick Reference

### Environment Variables

```env
# Required for email notifications
RESEND_API_KEY="re_xxxxxxxxxxxxx"
OWNER_EMAIL="owner@example.com"
FROM_EMAIL="noreply@yourdomain.com"

# Optional (has defaults)
COMPANY_NAME="CRC Tree Service"
COMPANY_PHONE="+1 (517) 715-7367"
COMPANY_EMAIL="chavezram05340@gmail.com"
```

### Test Command

```bash
curl -X POST http://localhost:3000/api/estimate \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"1234567890","service":"tree-removal"}'
```

### Check Email Status

1. Check Resend dashboard: [resend.com/emails](https://resend.com/emails)
2. Check application logs
3. Check spam folder

---

**Last Updated:** 2024-01-01  
**Version:** 1.0.0