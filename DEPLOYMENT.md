# CRC Tree Service - Deployment Guide

This guide covers deploying the CRC Tree Service website to production.

## Pre-Deployment Checklist

- [ ] PostgreSQL database is set up and accessible
- [ ] `DATABASE_URL` environment variable is configured
- [ ] All tests pass locally
- [ ] Code is reviewed and approved
- [ ] `.env` file is NOT committed to version control

## Database Setup

### Option 1: Neon (Recommended)

Neon offers serverless PostgreSQL with excellent free tier.

1. **Create Account**: Go to [neon.tech](https://neon.tech) and sign up
2. **Create Project**: Click "Create Project" → Name it "crc-tree-service"
3. **Get Connection String**:
   - Go to Project Settings → Connection Details
   - Copy the "Connection string" (URI mode)
4. **Configure Environment**:
   ```bash
   # In your deployment platform, set:
   DATABASE_URL="postgresql://username:password@ep-example.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
   ```
5. **Run Migrations**:
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

### Option 2: Supabase

Supabase provides PostgreSQL with additional features like authentication and storage.

1. **Create Project**: Go to [supabase.com](https://supabase.com) → New Project
2. **Get Connection String**:
   - Go to Project Settings → Database
   - Copy "Connection string" (URI mode)
3. **Configure and Deploy** (same as above)

### Option 3: AWS RDS

For enterprise deployments requiring full control.

1. **Create RDS Instance**:
   - Go to AWS Console → RDS → Create Database
   - Choose PostgreSQL
   - Configure instance size and storage
   - Set up VPC and security groups
2. **Create Database**:
   ```bash
   psql -h your-rds-endpoint.rds.amazonaws.com -U postgres
   CREATE DATABASE neondb;
   ```
3. **Configure Environment**:
   ```bash
   DATABASE_URL="postgresql://username:password@your-rds-endpoint.rds.amazonaws.com:5432/neondb"
   ```

## Deployment Platforms

### Vercel (Recommended for Next.js)

Vercel offers the best experience for Next.js applications.

#### 1. Connect Repository

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link
```

#### 2. Configure Environment Variables

```bash
# Add production database URL
vercel env add DATABASE_URL production

# Enter your PostgreSQL connection string when prompted
```

#### 3. Deploy

```bash
# Deploy to production
vercel --prod
```

Or use the Vercel Dashboard:
1. Import your GitHub repository
2. Add environment variables in Project Settings
3. Click "Deploy"

#### 4. Post-Deployment

```bash
# Run migrations after deployment
vercel env pull  # Pull production env vars
npx prisma generate
npx prisma migrate deploy
```

### Railway

Railway offers easy deployment with built-in PostgreSQL.

#### 1. Connect Repository

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository

#### 2. Add PostgreSQL

1. Click "+ New" → "Database" → "PostgreSQL"
2. Railway will automatically provision a PostgreSQL instance
3. The `DATABASE_URL` will be automatically set

#### 3. Configure Build

Railway automatically detects Next.js and configures:
- Build Command: `npm run build`
- Start Command: `npm start`

#### 4. Deploy

Push to your main branch → Railway automatically deploys

### AWS (Advanced)

For full control and enterprise requirements.

#### 1. Set Up Infrastructure

```bash
# Using AWS CDK or Terraform, create:
# - EC2 instance or ECS cluster
# - RDS PostgreSQL instance
# - Application Load Balancer
# - S3 bucket for assets (if needed)
```

#### 2. Configure Environment

```bash
# Set environment variables on EC2/ECS:
export DATABASE_URL="postgresql://..."
export NODE_ENV="production"
```

#### 3. Deploy Application

```bash
# SSH into server or use CI/CD pipeline
git pull origin main
npm ci --only=production
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 start npm --name "crc-tree-service" -- start
```

## Environment Variables

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment name | `production` |
| `RESEND_API_KEY` | Resend API key for email notifications | - |
| `OWNER_EMAIL` | Business owner email for notifications | - |
| `FROM_EMAIL` | From email address for outgoing emails | - |
| `COMPANY_NAME` | Company name for email templates | CRC Tree Service |
| `COMPANY_PHONE` | Company phone number | +1 (517) 715-7367 |
| `COMPANY_EMAIL` | Company contact email | - |

## Post-Deployment Tasks

### 1. Verify Database Connection

```bash
# Test database connection
npx prisma db pull

# Check migrations status
npx prisma migrate status
```

### 2. Test API Endpoint

```bash
# Test estimate API
curl -X POST https://your-domain.com/api/estimate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "tree-removal"
  }'
```

### 3. Test Contact Form

1. Visit your website
2. Navigate to Contact page
3. Submit a test estimate request
4. Verify data appears in database

### 4. Set Up Monitoring

#### Basic Health Check

Create `app/api/health/route.ts`:
```typescript
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
  })
}
```

#### Uptime Monitoring

Use services like:
- [UptimeRobot](https://uptimerobot.com) (Free)
- [Pingdom](https://www.pingdom.com) (Paid)
- [Better Stack](https://betterstack.com) (Free tier available)

### 5. Set Up Error Tracking

#### Sentry (Recommended)

```bash
npm install @sentry/nextjs
```

Configure `sentry.client.config.js` and `sentry.server.config.js`

#### LogRocket

```bash
npm install logrocket
```

## Security Considerations

### 1. SSL/TLS

- Ensure your deployment platform enforces HTTPS
- Use HSTS headers
- Redirect HTTP to HTTPS

### 2. Database Security

- Use strong, unique passwords
- Restrict database access to application only
- Enable SSL for database connections
- Regular backups

### 3. Environment Variables

- Never commit `.env` files
- Use platform-specific secret management
- Rotate credentials regularly

### 4. Rate Limiting

Consider adding rate limiting to the API:

```typescript
// app/api/estimate/route.ts
import { rateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  
  const { success } = await rateLimit(ip, 10, 60) // 10 requests per minute
  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }
  
  // ... rest of the code
}
```

## Backup Strategy

### Automated Backups

#### PostgreSQL (Native)

```bash
# Daily backup script
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Store in S3 or similar
aws s3 cp backup-$(date +%Y%m%d).sql s3://your-bucket/backups/
```

#### Prisma Backup

```bash
# Export data
npx prisma db pull
```

### Manual Backup

```bash
# Create backup
pg_dump $DATABASE_URL > backup.sql

# Restore from backup
psql $DATABASE_URL < backup.sql
```

## Scaling Considerations

### Database Optimization

1. **Connection Pooling**: Already configured with `pg` Pool
2. **Indexing**: Add indexes for frequently queried fields
3. **Query Optimization**: Use Prisma's query logging to identify slow queries

### Application Optimization

1. **Caching**: Implement Redis for frequently accessed data
2. **CDN**: Use Vercel's Edge Network or CloudFlare
3. **Image Optimization**: Next.js Image component already optimized

## Troubleshooting

### Database Connection Issues

```bash
# Test connection
psql $DATABASE_URL

# Check Prisma status
npx prisma status

# View Prisma debug logs
DEBUG=prisma:* npx prisma generate
```

### Migration Failures

```bash
# Check migration status
npx prisma migrate status

# Resolve migration conflicts
npx prisma migrate resolve

# Reset database (CAUTION: Deletes all data!)
npx prisma migrate reset
```

### Application Errors

1. Check deployment logs
2. Verify environment variables
3. Test database connection
4. Check API endpoint directly

## Support

For deployment issues:
- Check the [README.md](./README.md)
- Review [SETUP.md](./SETUP.md)
- Contact the development team

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Generate Prisma Client
        run: npx prisma generate
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          
      - name: Run migrations
        run: npx prisma migrate deploy
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          
      - name: Build application
        run: npm run build
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Cost Estimation

### Minimal Setup (Free Tier)

- **Vercel**: Free (Hobby plan)
- **Neon PostgreSQL**: Free (0.25 CU, 0.5 GB storage)
- **Total**: $0/month

### Small Business Setup

- **Vercel Pro**: $20/month
- **Neon PostgreSQL**: $19/month (2 CU, 3 GB storage)
- **Total**: ~$40/month

### Enterprise Setup

- **Vercel Enterprise**: Custom pricing
- **AWS RDS PostgreSQL**: $100+/month (depending on instance size)
- **Monitoring & Backup**: $50+/month
- **Total**: $150+/month

---

**Last Updated**: 2026-07-13  
**Version**: 1.1.0