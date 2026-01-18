import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Library - Your Book Store",
  description: "Quality books and premium stationery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}