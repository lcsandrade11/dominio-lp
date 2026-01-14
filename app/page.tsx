import { ContactForm } from "@/components/landing/contact-form";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { PainPoints } from "@/components/landing/pain-points";
import { SocialProof } from "@/components/landing/social-proof";
import { Solution } from "@/components/landing/solution";

export default function LandingPage() {
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
            Falar com Consultor
          </a>
        </div>
      </header>

      <Hero />
      <SocialProof />
      <PainPoints />
      <Solution />
      <FAQ />
      <ContactForm />

      {/* Footer Simples */}
      <footer className="bg-[#2D4D80] text-gray-300 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Domínio Soluções BPO. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
