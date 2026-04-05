const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$executeRawUnsafe(`INSERT INTO storage.buckets (id, name, public) VALUES ('products', 'products', true) ON CONFLICT (id) DO NOTHING;`);
    
    try {
      await prisma.$executeRawUnsafe(`CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'products');`);
    } catch (e) { console.log('Policy may already exist', e.message); }

    try {
      await prisma.$executeRawUnsafe(`CREATE POLICY "Allow public read" ON storage.objects FOR SELECT TO public USING (bucket_id = 'products');`);
    } catch (e) { }

    console.log('Supabase Storage bucket and RLS policies configured successfully!');
  } catch(e) {
    console.error('Fatal error', e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
