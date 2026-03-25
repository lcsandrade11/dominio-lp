import type { Metadata } from "next";
import { ContactForm } from "@/components/landing/online/contact-form";
import { Experience } from "@/components/landing/experience";
import { FAQ } from "@/components/landing/online/faq";
import { Hero } from "@/components/landing/online/hero";
import { PainPoints } from "@/components/landing/online/pain-points";
import { SocialProof } from "@/components/landing/social-proof";
import { Solution } from "@/components/landing/online/solution";

export const metadata: Metadata = {
  title:
    "Contabilidade Online para Empresas | Domínio Soluções BPO & Tax Consult",
  description:
    "Contabilidade digital completa para PJ. Contador online com atendimento consultivo, automação fiscal e suporte por WhatsApp. Atendemos todo o Brasil.",
  keywords: [
    "contabilidade online para empresas",
    "contador online PJ",
    "contabilidade digital",
    "escritório contábil online",
    "contador digital para empresas",
    "contabilidade remota PJ",
  ],
  authors: [{ name: "Domínio Soluções BPO" }],
  openGraph: {
    title: "Contabilidade Online para Empresas | Domínio Soluções BPO",
    description:
      "Contabilidade digital completa para PJ. Contador online com atendimento consultivo e automação fiscal. Atendemos todo o Brasil.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidade Online para Empresas | Domínio Soluções BPO",
    description:
      "Contabilidade digital completa para PJ. Contador online com atendimento consultivo e automação fiscal. Atendemos todo o Brasil.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OnlinePage() {
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
            Falar com Contador Online
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
