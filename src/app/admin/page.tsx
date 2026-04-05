import AdminDashboard from "../../components/admin/AdminDashboard";
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  noStore();
  const [categories, orders, settings] = await Promise.all([
    prisma.category.findMany({
      include: { products: true },
      orderBy: { createdAt: "asc" }
    }),
    prisma.order.findMany({
      orderBy: { createdAt: "desc" }
    }),
    prisma.settings.findUnique({ where: { id: "global" } })
  ]);
  
  const isOpen = settings?.isOpen ?? true;
  const lastOpenedAt = settings?.lastOpenedAt?.toISOString() || new Date(0).toISOString();

  return <AdminDashboard initialCategories={categories} initialOrders={orders} isOpenInitial={isOpen} lastOpenedAt={lastOpenedAt} />;
}
