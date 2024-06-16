import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Image from 'next/image'
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Nav />
      <div className="mt-24">
        {children}
      </div>
      <Footer />
    </>

  )

}
