import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const { Pool } = pg

/**
 * Creates a Prisma client instance with PostgreSQL adapter
 * 
 * This function initializes a connection pool and creates a Prisma client
 * with the adapter pattern required by Prisma 7.
 * 
 * @throws {Error} If DATABASE_URL environment variable is not set
 * @returns {PrismaClient} Configured Prisma client instance
 */
const createPrismaClient = () => {
  const databaseUrl = process.env.DATABASE_URL
  
  if (!databaseUrl) {
    // In development/build environments without database, return a mock client
    // This allows the app to build even without database connection
    if (process.env.NODE_ENV === 'production') {
      throw new Error('DATABASE_URL environment variable is required in production')
    }
    console.warn('DATABASE_URL not set - Prisma client will not be functional')
    return {} as PrismaClient
  }

  // Create a connection pool
  const pool = new Pool({
    connectionString: databaseUrl,
  })

  // Create the Prisma adapter
  const adapter = new PrismaPg(pool)

  // Create and return the Prisma client with the adapter
  return new PrismaClient({ adapter })
}

// Singleton pattern to prevent multiple Prisma client instances during development
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

// Graceful shutdown for development
if (process.env.NODE_ENV === 'development') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect()
  })
}