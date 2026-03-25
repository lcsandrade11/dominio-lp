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
              Contabilidade online é segura e confiável?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Sim. Utilizamos sistemas com criptografia e backup em nuvem. Somos
              um escritório com mais de 20 anos de mercado — a operação é
              digital, mas a solidez é a mesma de um escritório tradicional.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Como funciona o atendimento na contabilidade online?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Você tem um contador dedicado acessível por WhatsApp, e-mail e
              videochamada. Nada de robôs ou filas de atendimento. Respondemos
              com agilidade e de forma consultiva.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Vocês atendem empresas de qualquer lugar do Brasil?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Sim. Nossa operação é 100% digital, atendemos empresas de todos os
              estados, em qualquer regime tributário: Simples Nacional, Lucro
              Presumido e Lucro Real.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              É difícil migrar minha contabilidade para a Domínio?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Não. Cuidamos de 100% do processo de migração e portabilidade
              contábil. Você não precisa se preocupar com nada — nós tratamos
              diretamente com o escritório anterior.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Quais serviços estão inclusos na contabilidade online?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Contabilidade completa: escrituração, apuração de impostos, folha
              de pagamento, obrigações acessórias, emissão de certidões,
              consultoria tributária e BPO financeiro. Tudo em um só lugar.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
