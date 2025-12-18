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
              Atendem empresas de quais regimes tributários?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Atendemos Simples Nacional, Lucro Presumido e Lucro Real. Somos
              especialistas em reenquadramento tributário para garantir que você
              pague o menor imposto possível dentro da lei.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              O que é exatamente o BPO Financeiro?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              É a terceirização do seu setor financeiro. Nós emitimos notas
              fiscais, controlamos contas a pagar e receber, e fazemos a
              conciliação bancária diária. Você ganha tempo e clareza sobre seus
              números sem precisar contratar funcionários extras.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              É difícil trocar de contador? Tenho medo da burocracia.
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Não se preocupe. Nós cuidamos de 100% do processo de migração e
              portabilidade dos dados junto ao seu contador antigo. É um
              processo seguro e transparente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Vocês atendem apenas no Rio de Janeiro?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Nossa sede é no RJ, mas nossa operação é Digital. Atendemos
              empresas em todo o Brasil com a mesma eficiência, usando
              ferramentas online para reuniões e troca de documentos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
