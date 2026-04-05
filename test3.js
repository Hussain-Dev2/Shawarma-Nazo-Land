require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
try {
  const p = new PrismaClient({ datasource: { url: process.env.DATABASE_URL } });
  console.log("Success with datasource:", typeof p);
} catch (e) {
  console.error("Error datasources:", e.message);
}
