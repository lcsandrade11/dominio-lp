"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMask } from "@react-input/mask";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCookie, generateEventId } from "@/lib/fb-tracking";
import { useUTMTracking } from "@/lib/hooks/use-utm-tracking";
import { saveFormSubmission } from "@/lib/actions/form-actions";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact-schema";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const utmParams = useUTMTracking();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      motivo: "",
    },
  });

  // Phone mask for Brazilian mobile: (XX) 9XXXX-XXXX
  const phoneMaskRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });

  // Extract phone register to merge refs
  const { ref: phoneRhfRef, ...phoneRegister } = register("phone");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");
    const event_id = generateEventId();
    const page_url = window.location.href;
    const user_agent = navigator.userAgent;

    // data.phone is already cleaned (digits only) by the schema transform
    try {
      await saveFormSubmission({
        name: data.name,
        email: data.email,
        phone: data.phone,
        motivo: data.motivo,
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
    apiPayload.append("form_fields[nome]", data.name);
    apiPayload.append("form_fields[email]", data.email);
    apiPayload.append("form_fields[celular]", data.phone);
    apiPayload.append("form_fields[motivo]", data.motivo);
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className={errors.name ? "text-red-500" : ""}
                    >
                      Nome
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      className={
                        errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className={errors.phone ? "text-red-500" : ""}
                    >
                      WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(21) 99999-9999"
                      className={
                        errors.phone
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }
                      {...phoneRegister}
                      ref={(el) => {
                        phoneRhfRef(el);
                        if (el) phoneMaskRef.current = el;
                      }}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className={errors.email ? "text-red-500" : ""}
                  >
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seuemail@gmail.com"
                    className={
                      errors.email
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="motivo"
                    className={errors.motivo ? "text-red-500" : ""}
                  >
                    Motivo
                  </Label>
                  <select
                    id="motivo"
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                      errors.motivo
                        ? "border-red-500 focus:ring-red-500"
                        : "border-input"
                    }`}
                    {...register("motivo")}
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
                  {errors.motivo && (
                    <span className="text-xs text-red-500 font-medium">
                      {errors.motivo.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg"
                >
                  {isSubmitting ? "Enviando..." : "Falar com Especialista"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
