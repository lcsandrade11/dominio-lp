import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Como funciona a troca de contador?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              O processo é simples: você nos autoriza a iniciar a migração, nós
              entramos em contato com seu contador atual para solicitar toda a
              documentação e dados contábeis, e assumimos as obrigações da sua
              empresa sem interrupção. Você não precisa se preocupar com nada.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Preciso avisar meu contador atual?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Sim, é necessário formalizar o distrato com o contador atual. Mas
              não se preocupe — nós cuidamos de toda a comunicação e dos
              trâmites necessários para que a transição aconteça de forma
              profissional e sem conflitos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Quanto tempo leva a migração?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Em geral, a migração completa leva de 5 a 15 dias úteis,
              dependendo da complexidade da sua empresa e da colaboração do
              contador anterior. Durante todo o processo, suas obrigações
              fiscais continuam sendo cumpridas normalmente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Vou perder dados ou histórico contábil?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Não. Seu contador anterior é obrigado por lei a fornecer toda a
              documentação contábil. Nós garantimos que todos os dados,
              balancetes, declarações e histórico fiscal sejam transferidos
              integralmente para nosso sistema.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}
