require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
async function run() {
  try {
    const p = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL });
    const c = await p.category.count();
    console.log("Count with datasourceUrl:", c);
  } catch (e) {
    console.error("Error datasourceUrl:", e);
  }
}
run();
