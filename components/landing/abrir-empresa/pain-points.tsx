import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, FileWarning } from "lucide-react";

export function PainPoints() {
  const pains = [
    {
      icon: <FileWarning className="h-10 w-10 text-white" />,
      title: "Burocracia Complexa",
      description:
        "Junta comercial, Receita Federal, prefeitura, SEFAZ… São dezenas de etapas que travam a abertura da sua empresa. Nós simplificamos tudo para você.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-white" />,
      title: "Escolha Errada de Regime Tributário",
      description:
        "MEI, Simples Nacional, Lucro Presumido ou Real? Escolher errado no início pode custar milhares de reais em impostos desnecessários todos os meses.",
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Demora e Custos Ocultos",
      description:
        "Processos mal feitos geram retrabalho, multas e atrasos. Com a Domínio Soluções, sua empresa abre rápido e sem surpresas no orçamento.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            O QUE IMPEDE VOCÊ DE ABRIR SUA EMPRESA HOJE?
          </h2>
          <p className="text-slate-600 text-lg">
            Esses são os 3 maiores obstáculos que travam quem quer empreender no
            Brasil.
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
