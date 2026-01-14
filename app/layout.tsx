import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contabilidade para Pequenas e Médias Empresas - Domínio Soluções BPO",
  description: "Contabilidade estratégica para pequenas e médias empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jost.variable} antialiased`}>{children}</body>
    </html>
  );
}
