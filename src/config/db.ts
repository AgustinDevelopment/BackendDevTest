import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
};

export const prisma = new PrismaClient();