import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Tabasco Al-Sham | تباسكو الشام",
  description: "أشهى الوجبات السريعة في بغداد - بوب الشام",
  icons: {
    icon: "/55555555555_page-0001.jpg",
    shortcut: "/55555555555_page-0001.jpg",
    apple: "/55555555555_page-0001.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className={`${cairo.className} min-h-full flex flex-col bg-brand-darker text-white`}>
        {children}
      </body>
    </html>
  );
}
