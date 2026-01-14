import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

export function PainPoints() {
  const pains = [
    {
      icon: <TrendingDown className="h-10 w-10 text-white" />,
      title: "O Labirinto Tributário",
      description:
        "Você está no regime certo? Empresas no Simples, Presumido ou Real deixam milhares de reais na mesa todo mês. Nós encontramos a solução ideal para você pagar menos.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-white" />,
      title: "O Caos Financeiro",
      description:
        "Contas misturadas, fluxo de caixa no escuro e planilhas manuais? Transformamos esse caos em sistema organizado com nosso BPO Financeiro.",
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Escravidão da Burocracia",
      description:
        "Passa mais tempo resolvendo problemas do governo do que vendendo? Automatizamos o fiscal e a folha para você focar apenas em crescer.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            O QUE ESTÁ TRAVANDO O CRESCIMENTO DA SUA EMPRESA HOJE?
          </h2>
          <p className="text-slate-600 text-lg">
            Identificamos os 3 maiores gargalos que impedem pequenas e médias
            empresas de lucrar mais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pains.map((pain) => (
            <Card
              key={pain.title}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-[#335B9B]"
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  {pain.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {pain.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-normal">
                  {pain.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
