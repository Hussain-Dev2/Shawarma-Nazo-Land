import prisma from './src/lib/prisma';

async function seed() {
  try {
    console.log('Seeding Tabasco Al-Sham Menu...');
    
    // Clear existing (optional but safe since count is 0)
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});

    const categories = [
      { 
        name: 'وجبات الصاج', 
        items: [
          { name: 'وجبة صاج دجاج', desc: 'صاج + فنكر + ثومية', price: 5000 },
          { name: 'وجبة صاج مشكل تباسكو الشام', desc: 'صاج + فنكر + ثومية + طرشي', price: 9000 },
          { name: 'وجبة صاج عائلي', desc: 'صاج + فنكر + ثومية + طرشي', price: 12000 },
          { name: 'وجبة صاج بالجبن عائلي', desc: 'صاج بالجبن + فنكر + ثومية + طرشي', price: 16500 },
        ]
      },
      { 
        name: 'بيتزا', 
        items: [
          { name: 'بيتزا دجاج', desc: 'وسط', price: 8000 },
          { name: 'بيتزا الفصول الأربعة', desc: 'وسط', price: 8000 },
          { name: 'بيتزا محشية الأطراف', desc: 'كبير', price: 12000 },
        ]
      },
      { 
        name: 'بركر', 
        items: [
          { name: 'بركر لحم كلاسك', desc: 'لحم بقري طازج', price: 2500 },
          { name: 'بركر دجاج بالجبن', desc: 'صدر دجاج مقرمش مع الجبن', price: 2500 },
          { name: 'بركر دبل لحم تباسكو الشام', desc: 'قطعتين لحم مع صوص خاص', price: 4000 },
        ]
      },
      { 
        name: 'ريزو', 
        items: [
          { name: 'ريزو كلاسك', desc: 'رز مع قطع دجاج', price: 5000 },
          { name: 'ريزو دبل تباسكو الشام', desc: 'وجبة دبل ريزو', price: 8000 },
        ]
      },
      { 
        name: 'شاورما', 
        items: [
          { name: 'لفة شاورما لحم', desc: 'لحم عراقي طازج', price: 3000 },
          { name: 'لفة شاورما دجاج', desc: 'دجاج بتتبيلة خاصة', price: 2500 },
          { name: 'ماعون شاورما مشكل', desc: 'شاورما لحم ودجاج', price: 7000 },
        ]
      },
      { 
        name: 'المقبلات والجانبيات', 
        items: [
          { name: 'صحن مقبلات مشكل', desc: 'حمص، متبل، تبولة، الخ', price: 5000 },
          { name: 'فنكر بوكس', desc: 'بطاطا مقلية مقرمشة', price: 2000 },
          { name: 'كبة برغل (قطعة)', desc: 'كبة برغل محشية باللحم', price: 1000 },
        ]
      }
    ];

    for (const catData of categories) {
      const category = await prisma.category.create({
        data: { name: catData.name }
      });

      for (const item of catData.items) {
        await prisma.product.create({
          data: {
            name: item.name,
            description: item.desc,
            price: item.price,
            categoryId: category.id,
            imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60'
          }
        });
      }
      console.log(`Created category: ${catData.name} with ${catData.items.length} items.`);
    }

    console.log('Seeding completed successfully!');
  } catch (e: any) {
    console.error('Seed Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
