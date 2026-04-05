import prisma from './src/lib/prisma';

async function test() {
  try {
    console.log('Testing DB connection...');
    const count = await prisma.category.count();
    console.log('Category Count:', count);
    
    if (count === 0) {
        console.log('DB is empty. Seeding...');
        // Manual seed script
    }
  } catch (e: any) {
    console.error('DB Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
