# CRC Tree Service

A professional tree service website built with Next.js 15, TypeScript, Prisma ORM, and PostgreSQL.

## Features

- 🌳 Professional tree service website with modern design
- 📝 Online estimate request system
- 📧 Email notifications (owner & customer)
- 📱 Fully responsive design
- ✉️ Contact form with validation
- 🗺️ Google Maps integration
- 📊 Admin-ready backend infrastructure

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma 7
- **Validation:** Zod
- **Email:** Resend
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Prerequisites

- Node.js 18+ 
- PostgreSQL 15+ (or cloud PostgreSQL service)
- npm or pnpm

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up PostgreSQL Database

#### Option A: Local PostgreSQL

**macOS (Homebrew):**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Create Database:**
```bash
psql -U postgres
CREATE DATABASE lansing_tree_service;
\q
```

#### Option B: Cloud PostgreSQL (Recommended for Production)

- [Neon](https://neon.tech) - Serverless PostgreSQL
- [Supabase](https://supabase.com) - PostgreSQL with extras
- [AWS RDS](https://aws.amazon.com/rds/postgresql/) - Managed PostgreSQL

### 3. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update `.env` with your database credentials:

**Local PostgreSQL:**
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/lansing_tree_service"
```

**Cloud PostgreSQL (e.g., Neon):**
```env
DATABASE_URL="postgresql://username:password@ep-example.us-east-2.aws.neon.tech/CRC_tree_service?sslmode=require"
```

3. (Optional) Configure email notifications:

```env
# Email Configuration (Resend)
RESEND_API_KEY="re_your_api_key_here"
OWNER_EMAIL="your_email@example.com"
FROM_EMAIL="noreply@yourdomain.com"
```

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed email configuration.

### 4. Run Database Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name create_estimate_requests
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
CRC-tree-service/
├── app/
│   ├── api/
│   │   └── estimate/
│   │       └── route.ts          # Estimate request API endpoint
│   ├── contact/
│   │   └── page.tsx              # Contact page with estimate form
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── navbar.tsx                # Navigation bar
│   ├── footer.tsx                # Footer
│   ├── hero.tsx                  # Hero section
│   ├── services.tsx              # Services section
│   └── ...
├── lib/
│   ├── prisma.ts                 # Prisma client singleton
│   ├── validations/
│   │   └── estimate.ts           # Zod validation schema
│   └── utils.ts                  # Utility functions
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Database migrations
├── public/
│   └── images/                   # Static images
├── prisma.config.ts              # Prisma configuration (Prisma 7)
└── .env                          # Environment variables
```

## Database Schema

### EstimateRequest

The main table for storing customer estimate requests:

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique identifier (CUID) |
| name | String | Customer's full name |
| email | String | Customer's email address |
| phone | String | Customer's phone number |
| address | String? | Property address (optional) |
| service | String | Requested service type |
| message | String? | Additional message (optional) |
| preferredContact | String? | Preferred contact method |
| status | String | Request status (default: "new") |
| createdAt | DateTime | When the request was created |
| updatedAt | DateTime | When the request was last updated |

## API Reference

### POST /api/estimate

Submit a new estimate request.

**Request Body:**
```json
{
  "name": "Chavez ram",
  "email": "chavezram@example.com",
  "phone": "(517) 715-7367",
  "address": " Lansing, Michigan",
  "service": "tree-removal",
  "message": "Need to remove a large oak tree",
  "preferredContact": "phone"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Estimate request submitted successfully",
  "data": {
    "id": "abc123",
    "name": "John Doe",
    "email": "john@example.com",
    "service": "tree-removal",
    "createdAt": "2024-01-01T12:00:00.000Z"
  }
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "message": "Please check your input and try again.",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email address"
    }
  ]
}
```

### GET /api/estimate

Returns API health status.

**Response:**
```json
{
  "name": "CRC Tree Service Estimate API",
  "version": "1.0.0",
  "status": "healthy",
  "endpoints": {
    "createEstimate": "POST /api/estimate"
  }
}
```

## Useful Commands

### Database Management

```bash
# View database in browser
npx prisma studio

# Create a new migration
npx prisma migrate dev --name description

# Apply pending migrations (production)
npx prisma migrate deploy

# Reset database (development only!)
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate

# Format schema
npx prisma format

# Validate schema
npx prisma validate
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Testing the Estimate System

### 1. Test the API Endpoint

```bash
curl -X POST http://localhost:3000/api/estimate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "tree-removal",
    "message": "Test message"
  }'
```

### 2. Test via Contact Form

1. Open [http://localhost:3000/contact](http://localhost:3000/contact)
2. Fill out the estimate request form
3. Click "Submit Request"
4. Check the success message

### 3. View Data in Database

```bash
npx prisma studio
```

## Production Deployment

### Environment Variables

Set these in your hosting platform:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |

### Recommended Hosting

- **Vercel** - Seamless Next.js deployment
- **Railway** - Easy PostgreSQL + Node.js hosting
- **AWS** - Full control with EC2 + RDS

### Pre-deployment Checklist

- [ ] Set up production PostgreSQL database
- [ ] Configure `DATABASE_URL` environment variable
- [ ] Run `prisma generate`
- [ ] Run `prisma migrate deploy`
- [ ] Test API endpoint
- [ ] Test contact form submission

## Future Enhancements

The backend is designed to support future features:

- 📧 Email notifications for new estimates
- 📊 Admin dashboard for managing requests
- 📱 SMS notifications
- 🔍 Search and filter estimates
- 📈 Analytics and reporting
- 👤 Customer history tracking
- 🔄 Status workflow management

## Troubleshooting

### Database Connection Issues

1. Verify PostgreSQL is running:
   ```bash
   # macOS
   brew services list
   
   # Linux
   sudo systemctl status postgresql
   ```

2. Check connection string format:
   ```
   postgresql://username:password@host:port/database
   ```

3. Test connection:
   ```bash
   psql $DATABASE_URL
   ```

### Prisma Errors

1. Regenerate Prisma Client:
   ```bash
   npx prisma generate
   ```

2. Reset and re-migrate:
   ```bash
   npx prisma migrate reset
   npx prisma migrate dev
   ```

### TypeScript Errors

1. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

## License

This project is proprietary and confidential.

## Support

For support, contact the development team.