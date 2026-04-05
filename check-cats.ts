import prisma from './src/lib/prisma';

async function check() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'asc' }
  });
  console.log('Categories in DB:');
  categories.forEach((c, i) => console.log(`${i+1}. ${c.name}`));
  process.exit(0);
}

check();
