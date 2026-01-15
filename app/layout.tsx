import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contabilidade Estratégica para PMEs | Domínio Soluções BPO & Tax Consult",
  description:
    "Reduza até 15% da sua carga tributária com contabilidade digital e consultoria fiscal especializada para pequenas e médias empresas. Automatização de processos, compliance e otimização tributária.",
  keywords: [
    "contabilidade para PME",
    "consultoria fiscal",
    "BPO contábil",
    "redução de impostos",
    "contabilidade digital",
    "otimização tributária",
    "Tax Consult",
  ],
  authors: [{ name: "Domínio Soluções BPO" }],
  openGraph: {
    title: "Contabilidade Estratégica para PMEs | Domínio Soluções BPO",
    description:
      "Reduza até 15% da sua carga tributária com contabilidade digital e consultoria fiscal especializada.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidade Estratégica para PMEs | Domínio Soluções BPO",
    description:
      "Reduza até 15% da sua carga tributária com contabilidade digital e consultoria fiscal especializada.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCQ923NN');`}
        </Script>
      </head>
      <body className={`${jost.variable} antialiased`}>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCQ923NN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
