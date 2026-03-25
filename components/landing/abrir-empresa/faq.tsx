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
              Qual a diferença entre MEI, ME e EPP?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              O MEI (Microempreendedor Individual) é para quem fatura até R$
              81.000/ano e tem no máximo 1 funcionário. A ME (Microempresa)
              permite faturamento até R$ 360.000/ano. Já a EPP (Empresa de
              Pequeno Porte) vai até R$ 4,8 milhões/ano. Nós ajudamos você a
              escolher a melhor opção para o seu negócio.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Quais documentos preciso para abrir minha empresa?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              Em geral, você precisa de RG, CPF, comprovante de residência e
              informações do endereço comercial. Dependendo da atividade, podem
              ser necessários documentos adicionais. Nossa equipe orienta você
              sobre tudo o que é necessário antes de iniciar o processo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Quanto tempo leva para abrir uma empresa?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              O prazo varia conforme o tipo de empresa e a localidade. Um MEI
              pode ser aberto no mesmo dia. Para ME e EPP, o processo completo
              (CNPJ, inscrição estadual/municipal e alvará) leva em média de 7 a
              15 dias úteis. Trabalhamos para agilizar cada etapa.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Quanto custa abrir uma empresa?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              O custo depende do tipo empresarial e das taxas do estado e
              município. O MEI é gratuito para abrir. Para outros tipos, há
              taxas de registro na Junta Comercial e emissão de alvarás. Entre
              em contato para um orçamento personalizado sem compromisso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
              Como escolher o regime tributário certo?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base">
              A escolha entre Simples Nacional, Lucro Presumido e Lucro Real
              depende do faturamento previsto, da atividade exercida e da
              estrutura de custos. Uma escolha errada pode significar pagar
              impostos desnecessários. Fazemos uma análise tributária completa
              antes da abertura para garantir a melhor opção.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
