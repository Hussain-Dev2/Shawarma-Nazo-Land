import prisma from "@/lib/prisma";
import MenuClient from "@/components/MenuClient";
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = "force-dynamic";

export default async function Home() {
  noStore();
  const [categories, settings] = await Promise.all([
    prisma.category.findMany({
      include: {
        products: true,
      },
      orderBy: {
        createdAt: "asc"
      }
    }),
    prisma.settings.findUnique({ where: { id: "global" } })
  ]);

  const isOpen = settings?.isOpen ?? true;

  return (
    <main className="min-h-screen pb-32 selection:bg-brand-red selection:text-white bg-[#050505] overflow-x-hidden">
      <MenuClient categories={categories} isOpen={isOpen} />
    </main>
  );
}
