import prisma from './src/lib/prisma';

async function seed() {
  try {
    console.log('Seeding Highly Organized Tabasco Al-Sham Menu...');
    
    // Clear existing
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});

    const categories = [
      { 
        name: 'الوجبات', 
        items: [
          { name: 'وجبة صاج دجاج', desc: '(صاج + فنكر + ثومية)', price: 5000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'وجبة صاج مشكل تباسكو الشام', desc: '(صاج + فنكر + ثومية + طرشي)', price: 9000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'وجبة صاج عائلي', desc: '(صاج + فنكر + ثومية + طرشي)', price: 12000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'وجبة صاج بالجبن عائلي', desc: '(صاج بالجبن + فنكر + ثومية + طرشي)', price: 16500, img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'الشاورما', 
        items: [
          { name: 'صاج دجاج كلاسك', desc: 'شاورما دجاج بتتبيلة شامية', price: 2000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'صاج دجاج عربي', desc: 'وجبة عربي مقطعة مع فنكر وثومية', price: 2000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'صاج دجاج بالجبن', desc: 'شاورما دجاج مع جبنة قشقوان', price: 3000, img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&auto=format&fit=crop&q=60' },
          { name: 'صاج دجاج بالجبن عربي', desc: 'وجبة عربي بالجبنة مع كامل الملحقات', price: 3000, img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&auto=format&fit=crop&q=60' },
          { name: 'شاورما دجاج صمون فرنسي', desc: 'شاورما دجاج داخل خبز الصمون الفرنسي', price: 2000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'كيلو شاورما دجاج', desc: 'حصة الـ 1000 غرام مع الخبز', price: 18000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
          { name: 'نصف كيلو شاورما دجاج', desc: 'حصة الـ 500 غرام لتجربة فاخرة', price: 9000, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'البيتزا', 
        items: [
          { name: 'بيتزا دجاج', desc: 'SIZES:صغير-6000,وسط-8000,كبير-10000', price: 8000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'بيتزا خضار', desc: 'SIZES:صغير-5000,وسط-7000,كبير-9000', price: 7000, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60' },
          { name: 'بيتزا ببروني', desc: 'SIZES:صغير-5000,وسط-7000,كبير-9000', price: 7000, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60' },
          { name: 'بيتزا الفصول الأربعة', desc: 'SIZES:صغير-6000,وسط-8000,كبير-10000', price: 8000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'بيتزا محشية الأطراف', desc: 'متوفرة بحجم كبير فقط', price: 12000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'لغم دجاج تباسكو الشام', desc: 'خلطة مميزة بالجبن', price: 5000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'لغم لحم', desc: 'لحم طازج مع الجبن', price: 6000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'عروسة دجاج بالجبن', desc: 'قطعة دجاج محمصة بالجبن', price: 4000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'فطيرة دجاج', desc: 'فطينة دجاج بالفرن', price: 6000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'فطيرة خضار', desc: 'فطيرة خضار لذيذة', price: 5000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
          { name: 'فطيرة لحم', desc: 'فطيرة لحم بالفرن', price: 6000, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'البركر', 
        items: [
          { name: 'بركر لحم كلاسيك', desc: 'لحم مشوي طازج', price: 2500, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر فطر', desc: 'لحم مع صوص الفطر', price: 2500, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر لحم بالجبن', desc: 'كلاسيك مع الجبن', price: 3000, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر لحم باربيكيو', desc: 'لحم مع باربيكيو', price: 3000, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر لحم مكسيكانو', desc: 'لحم حار', price: 3000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر لحم كرز', desc: 'نكهة خاصة بالكرز', price: 3500, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر لحم دبل', desc: 'قطعتين لحم مع الجبن', price: 5000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر دجاج كلاسيك', desc: 'دجاج مقرمش', price: 2000, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر دجاج بالجبن', desc: 'دجاج بالجبن شيدر', price: 2500, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر دجاج مكسيكانو', desc: 'دجاج مكسيكانو حار', price: 2500, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر دجاج دبل', desc: 'وجبة دجاج دبل', price: 4500, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر لحم تباسكو الشام', desc: 'بركرنا الخاص الملكي', price: 4000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60' },
          { name: 'بركر دجاج تباسكو الشام', desc: 'دجاج بخلطة تباسكو', price: 3500, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'الريزو', 
        items: [
          { name: 'ريزو كلاسيك', desc: 'رز مع دجاج', price: 5000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'ريزو جبن', desc: 'رز مع صوص الجبن', price: 5000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'ريزو مدخن', desc: 'رز بنكهة مدخنة', price: 5000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'ريزو سبايسي', desc: 'رز حار مع دجاج', price: 5000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'ريزو تباسكو الشام', desc: 'ريزو بخلطتنا الخاصة', price: 5000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'ريزو شاورما دجاج', desc: 'رز مع شاورما الدجاج', price: 5000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
          { name: 'ريزو دبل تباسكو الشام', desc: 'وجبة ريزو دبل مشبعة', price: 8000, img: 'https://images.unsplash.com/photo-1512058560566-427a1bd5a5cd?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'الدجاج المقرمش', 
        items: [
          { name: 'ستربس 4 قطع', desc: 'مع كامل الملحقات', price: 5000, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60' },
          { name: 'ستربس عائلي', desc: 'وجبة عائلية كبيرة', price: 10000, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60' },
          { name: 'وجدة كنتاكي 3 قطع', desc: 'قطع دجاج مقرمشة', price: 6000, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60' },
          { name: 'وجدة كنتاكي 6 قطع', desc: 'قطع دجاج مشبعة', price: 12000, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60' },
          { name: 'وجدة كنتاكي عائلي', desc: 'بوكس عائلي 12 قطعة', price: 20000, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'المقبلات والمشروبات', 
        items: [
          { name: 'مقبلات مشكلة', desc: 'صحن مقبلات منوع', price: 2000, img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&auto=format&fit=crop&q=60' },
          { name: 'صحن فنكر', desc: 'بطاطا مقلية', price: 1000, img: 'https://images.unsplash.com/photo-1630384066252-19e1ad95b4f8?w=500&auto=format&fit=crop&q=60' },
          { name: 'صحن فنكر بالجبن', desc: 'بطاطا مقلية بالجبنة', price: 1500, img: 'https://images.unsplash.com/photo-1630384066252-19e1ad95b4f8?w=500&auto=format&fit=crop&q=60' },
          { name: 'ببسي', desc: 'قوطية', price: 500, img: 'https://plus.unsplash.com/premium_photo-1678253165275-c0528e19c0b7?w=500&auto=format&fit=crop&q=60' },
          { name: 'لبن', desc: 'كوب لبن', price: 500, img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&auto=format&fit=crop&q=60' },
        ]
      },
      { 
        name: 'الصوصات', 
        items: [
          { name: 'رانش', desc: 'صوص بارد', price: 500, img: 'https://images.unsplash.com/photo-1582233543660-5f65342d069b?w=500&auto=format&fit=crop&q=60' },
          { name: 'ثومية', desc: 'ثومية المطعم الخاصة', price: 500, img: 'https://images.unsplash.com/photo-1582233543660-5f65342d069b?w=500&auto=format&fit=crop&q=60' },
          { name: 'سبايسي', desc: 'صوص حار جداً', price: 500, img: 'https://images.unsplash.com/photo-1582233543660-5f65342d069b?w=500&auto=format&fit=crop&q=60' },
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
            imageUrl: item.img
          }
        });
      }
      console.log(`Created: ${catData.name}`);
    }

    console.log('Seed Success!');
  } catch (e: any) {
    console.error('Seed Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
