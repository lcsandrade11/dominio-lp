import type { Metadata } from "next";
import { Experience } from "@/components/landing/experience";
import { SocialProof } from "@/components/landing/social-proof";
import { ContactForm } from "@/components/landing/trocar-contador/contact-form";
import { FAQ } from "@/components/landing/trocar-contador/faq";
import { Hero } from "@/components/landing/trocar-contador/hero";
import { PainPoints } from "@/components/landing/trocar-contador/pain-points";
import { Solution } from "@/components/landing/trocar-contador/solution";

export const metadata: Metadata = {
  title:
    "Trocar de Contador sem Dor de Cabeça | Domínio Soluções BPO & Tax Consult",
  description:
    "Insatisfeito com seu contador? Fazemos a migração contábil completa da sua empresa com segurança, sem perda de dados e sem burocracia. Atendimento dedicado e planejamento tributário proativo.",
  keywords: [
    "trocar de contador",
    "mudar de contabilidade",
    "trocar de escritório contábil",
    "insatisfeito com contador",
    "migração contábil",
    "mudar de contador",
  ],
  authors: [{ name: "Domínio Soluções BPO" }],
  openGraph: {
    title: "Trocar de Contador sem Dor de Cabeça | Domínio Soluções BPO",
    description:
      "Insatisfeito com seu contador? Migração contábil completa, sem perda de dados e sem burocracia.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trocar de Contador sem Dor de Cabeça | Domínio Soluções BPO",
    description:
      "Insatisfeito com seu contador? Migração contábil completa, sem perda de dados e sem burocracia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TrocarContadorPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Header Simples (Logo) */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <img
            src="/logo_dominio.webp"
            alt="Domínio Soluções"
            width={180}
            height={48}
            className="h-12 w-auto"
          />

          <a
            href="#contato"
            className="bg-[#335B9B] hover:bg-[#2d4373] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Trocar de Contador
          </a>
        </div>
      </header>

      <Hero />
      <SocialProof />
      <PainPoints />
      <Solution />
      <Experience />
      <FAQ />
      <ContactForm />

      {/* Footer Simples */}
      <footer className="bg-[#2D4D80] text-gray-300 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Domínio Soluções BPO. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">CNPJ: 34.749.735/0001-34</p>
        </div>
      </footer>
    </main>
  );
}
