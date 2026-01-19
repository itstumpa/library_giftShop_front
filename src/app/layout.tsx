


import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>

        <StoreProvider>
          <header><Header></Header></header>
          {children}
        </StoreProvider>
        <footer><Footer></Footer></footer>
      </body>
    </html>
  );
}

