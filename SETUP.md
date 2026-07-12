# CRC Tree Service - Database Setup Guide

This guide will help you set up PostgreSQL and configure the database for the Lansing Tree Service website.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

## Option 1: Local PostgreSQL Setup (Development)

### Step 1: Install PostgreSQL

#### macOS (using Homebrew)
```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install PostgreSQL
brew install postgresql@15

# Start PostgreSQL service
brew services start postgresql@15
```

#### macOS (using Postgres.app)
1. Download Postgres.app from https://postgresapp.com/
2. Drag to Applications folder
3. Open Postgres.app and click "Initialize"

#### Windows
1. Download PostgreSQL from https://www.postgresql.org/download/windows/
2. Run the installer and follow the setup wizard
3. Remember your password during installation

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Step 2: Create Database

```bash
# Connect to PostgreSQL (default user is usually 'postgres')
psql -U postgres

# Create database
CREATE DATABASE CRC_tree_service;

# Create user (optional, for better security)
CREATE USER CRC_tree WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE CRC_tree_service TO CRC_tree;

# Exit PostgreSQL
\q
```

### Step 3: Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your database credentials:

**For local PostgreSQL:**
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/lansing_tree_service"
```

**If you created a separate user:**
```env
DATABASE_URL="postgresql://CRC_tree:your_secure_password@localhost:5432/CRC_tree_service"
```

### Step 4: Run Prisma Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name create_estimate_requests
```

## Option 2: Cloud PostgreSQL (Production)

### Using Neon (Serverless PostgreSQL)

1. Go to https://neon.tech and create a free account
2. Create a new project named "lansing-tree-service"
3. Copy the connection string from the dashboard
4. Update your `.env` file:

```env
DATABASE_URL="postgresql://username:password@ep-example.us-east-2.aws.neon.tech/lansing_tree_service?sslmode=require"
```

### Using Supabase

1. Go to https://supabase.com and create a free account
2. Create a new project
3. Go to Project Settings > Database
4. Copy the "Connection string" (URI mode)
5. Update your `.env` file

### Using AWS RDS

1. Create an RDS PostgreSQL instance in AWS Console
2. Configure security groups to allow connections
3. Copy the endpoint and credentials
4. Update your `.env` file:

```env
DATABASE_URL="postgresql://username:password@your-rds-endpoint.rds.amazonaws.com:5432/crc_tree_service"
```

## Verification

After setup, verify the database connection:

```bash
# Check database connection
npx prisma db pull

# View database tables
npx prisma studio
```

Open your browser to http://localhost:5555 to see Prisma Studio (database GUI).

## Troubleshooting

### Error: "Cannot connect to database"

1. Verify PostgreSQL is running:
   ```bash
   # macOS
   brew services list
   
   # Linux
   sudo systemctl status postgresql
   ```

2. Check credentials in `.env` file
3. Ensure database exists: `psql -U postgres -l`

### Error: "Authentication failed"

1. Reset PostgreSQL password:
   ```bash
   # macOS
   psql -U postgres
   ALTER USER postgres WITH PASSWORD 'new_password';
   ```

2. Update `.env` with new password

### Error: "Database does not exist"

Create the database:
```bash
psql -U postgres
CREATE DATABASE lansing_tree_service;
```

## Production Deployment

For production deployment:

1. Use a cloud PostgreSQL provider (Neon, Supabase, AWS RDS)
2. Set `DATABASE_URL` in your hosting platform's environment variables
3. Run migrations: `npx prisma migrate deploy`
4. Generate Prisma Client: `npx prisma generate`

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |

## Next Steps

After database setup:

1. Test the API endpoint: `POST /api/estimate`
2. Submit a test form on the Contact page
3. View data in Prisma Studio: `npx prisma studio`