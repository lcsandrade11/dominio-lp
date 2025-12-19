"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCookie, generateEventId } from "@/lib/fb-tracking";
import { useUTMTracking } from "@/lib/hooks/use-utm-tracking";
import { saveFormSubmission } from "@/lib/actions/form-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const utmParams = useUTMTracking();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");
    const event_id = generateEventId();
    const page_url = window.location.href;
    const user_agent = navigator.userAgent;

    // Save to database
    try {
      await saveFormSubmission({
        name: data.name as string,
        email: data.email as string,
        phone: data.phone as string,
        motivo: data.motivo as string,
        referrer: utmParams.referrer,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_content: utmParams.utm_content,
        fbp,
        fbc,
        event_id,
        page_url,
        user_agent,
      });
    } catch (error) {
      console.error("Database save error:", error);
    }

    // Send to Elementor webhook
    const apiPayload = new URLSearchParams();
    apiPayload.append("form_fields[nome]", data.name as string);
    apiPayload.append("form_fields[email]", data.email as string);
    apiPayload.append("form_fields[celular]", data.phone as string);
    apiPayload.append("form_fields[motivo]", data.motivo as string);
    apiPayload.append("form_fields[fbp]", fbp);
    apiPayload.append("form_fields[fbc]", fbc);
    apiPayload.append("form_fields[event_id]", event_id);
    apiPayload.append("form_fields[page_url]", page_url);
    apiPayload.append("form_fields[user_agent]", user_agent);

    try {
      await fetch("https://your-worker-url.workers.dev/elementor-lead", {
        method: "POST",
        body: apiPayload,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch (error) {
      console.error("CAPI Error:", error);
    }

    // Redirect to WhatsApp
    const whatsappNumber = "5521973514867";
    const message = `Olá, tudo bem? Venho através do Site Domínio Soluções, Meu nome é "${data.name}" Telefone: ${data.phone} E-mail: ${data.email} O motivo do meu contato é: ${data.motivo}`;

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <section id="contato" className="py-24 bg-[#335A98] text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para parar de perder dinheiro?
            </h2>
            <p className="text-blue-100 text-lg">
              Preencha o formulário para receber uma análise...
            </p>
          </div>

          <Card className="bg-white text-slate-900 border-none shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-blue-900">
                Solicitar Proposta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seuemail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivo">Motivo</Label>
                  <select
                    id="motivo"
                    name="motivo"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Contábil">Contábil</option>
                    <option value="Fiscal">Fiscal</option>
                    <option value="Departamento Pessoal">
                      Departamento Pessoal
                    </option>
                    <option value="Societário">Societário</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Staff Loan">Staff Loan</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg"
                >
                  {loading ? "Enviando..." : "Falar com Especialista"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
