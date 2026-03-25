import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, FileWarning } from "lucide-react";

export function PainPoints() {
  const pains = [
    {
      icon: <FileWarning className="h-10 w-10 text-white" />,
      title: "Contador que Só Entrega Guia",
      description:
        "Seu escritório contábil se limita a gerar boletos e guias? Sem análise, sem consultoria, sem visão estratégica. Na Domínio, contabilidade vai além da obrigação.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-white" />,
      title: "Falta de Acesso e Transparência",
      description:
        "Precisa de um relatório e demora dias? Não sabe se está no regime tributário certo? Com a contabilidade digital da Domínio, você tem acesso em tempo real e comunicação direta pelo WhatsApp.",
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Processos Manuais e Retrabalho",
      description:
        "Enviar documentos por e-mail, conferir planilhas, cobrar respostas. Digitalizamos e automatizamos todo o fluxo contábil para eliminar retrabalho e erros.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            O QUE ESTÁ TRAVANDO A GESTÃO CONTÁBIL DA SUA EMPRESA?
          </h2>
          <p className="text-slate-600 text-lg">
            Esses são os 3 maiores problemas de quem depende de uma
            contabilidade tradicional.
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
