import { AlertTriangle, Clock, PhoneOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PainPoints() {
  const pains = [
    {
      icon: <PhoneOff className="h-10 w-10 text-white" />,
      title: "Falta de Atenção e Suporte",
      description:
        "Ligações sem retorno, e-mails ignorados e dúvidas que nunca são resolvidas. Você merece um contador que esteja disponível quando você precisa.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-white" />,
      title: "Erros e Atrasos nas Obrigações",
      description:
        "Guias atrasadas, declarações com erro e multas que poderiam ser evitadas. Erros na contabilidade custam caro e colocam sua empresa em risco.",
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Zero Proatividade e Planejamento",
      description:
        "Seu contador só aparece na hora de cobrar? Sem planejamento tributário, você paga mais imposto do que deveria e perde oportunidades de crescimento.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            SEU CONTADOR ATUAL ESTÁ TE PREJUDICANDO?
          </h2>
          <p className="text-slate-600 text-lg">
            Esses são os 3 sinais de que está na hora de trocar de
            contabilidade.
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
