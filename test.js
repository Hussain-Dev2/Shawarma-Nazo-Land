require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
try {
  const p = new PrismaClient({ url: process.env.DATABASE_URL });
  console.log("Success with url");
} catch (e) {
  console.error("Error with url:", e.message);
}
try {
  const p = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL });
  console.log("Success with datasourceUrl");
} catch (e) {
  console.error("Error with datasourceUrl:", e.message);
}
