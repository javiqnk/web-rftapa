import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { getLanguage, Locale, i18n } from "@/get-language";

import Image from 'next/image'
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {

  var lang = await getLanguage(locale);

  return (
    <>
      <Nav getLanguage={lang} locale={locale} i18n={i18n} />
      <div className="mt-24">
        {children}
      </div>
      <Footer locale={locale} />
    </>

  )

}
