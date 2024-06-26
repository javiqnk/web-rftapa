import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Federación de Tiro con Arco del Principado de Asturias | FTAPA",
  description: "Página web oficial de la Federación de Tiro con Arco del Principado de Asturias",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return (
    <html lang={locale} className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/img/logos/logo.png" sizes="any" />
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
