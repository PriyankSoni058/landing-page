"use client";

import "../styles/index.css";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <StoreProvider>{children}</StoreProvider>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
