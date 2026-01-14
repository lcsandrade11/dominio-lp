import { Check } from "lucide-react";
import { ContactFormDialog } from "./contact-form-dialog";

export function Solution() {
  const benefits = [
    "Análise Tributária Preventiva",
    "Automação Fiscal e Contábil",
    "BPO Financeiro Integrado",
    "Atendimento Consultivo (Sem Robôs no WhatsApp)",
  ];

  const partners = [
    { name: "Thomson Reuters", logo: "/partners/thomsom-reuters.webp" },
    { name: "Omie", logo: "/partners/omie.webp" },
    { name: "Microsoft", logo: "/partners/microsoft.webp" },
    { name: "Optimizza", logo: "/partners/otimizza.webp" },
    { name: "Python", logo: "/partners/python.webp" },
    { name: "Qive", logo: "/partners/qive.webp" },
    { name: "Ever Track", logo: "/partners/ever-track.webp" },
    { name: "Confer IR", logo: "/partners/confer-ir.webp" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Mais que contabilidade: <br />
              <span className="text-[#335B9B]">Inteligência de Negócios.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-normal">
              Enquanto a contabilidade tradicional apenas "entrega guias", a
              Domínio Soluções usa tecnologia de ponta para auditar sua empresa
              preventivamente. Não somos uma startup aventureira, temos 20 anos
              de mercado.
            </p>

            <ul className="space-y-3 mb-6">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <ContactFormDialog
              triggerText="Solicitar Proposta"
              triggerClassName="bg-[#335B9B] hover:bg-[#2d4373] text-white font-bold h-12 px-6 rounded-md shadow-lg transition-all"
            />
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
            <h3 className="text-base font-semibold text-slate-500 uppercase tracking-wider mb-6 text-center">
              Tecnologia e Parceiros Oficiais
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="h-20 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="object-contain w-auto h-full max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
