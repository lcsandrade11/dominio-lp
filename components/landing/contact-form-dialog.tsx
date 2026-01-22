"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMask } from "@react-input/mask";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCookie, generateEventId } from "@/lib/fb-tracking";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact-schema";

interface ContactFormDialogProps {
  triggerText?: string;
  triggerClassName?: string;
}

export function ContactFormDialog({
  triggerText = "Falar com Especialista",
  triggerClassName,
}: ContactFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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

    // Prepare Data for API (Elementor Format)
    const apiPayload = new URLSearchParams();
    apiPayload.append("form_fields[nome]", data.name);
    apiPayload.append("form_fields[email]", data.email);
    apiPayload.append("form_fields[celular]", data.phone);
    apiPayload.append("form_fields[motivo]", data.motivo);

    // Tracking Data
    apiPayload.append("form_fields[fbp]", getCookie("_fbp"));
    apiPayload.append("form_fields[fbc]", getCookie("_fbc"));
    apiPayload.append("form_fields[event_id]", generateEventId());
    apiPayload.append("form_fields[page_url]", window.location.href);
    apiPayload.append("form_fields[user_agent]", navigator.userAgent);

    try {
      await fetch(
        "https://dominio-api.core-team-eef.workers.dev/elementor-lead",
        {
          method: "POST",
          body: apiPayload,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
    } catch (error) {
      console.error("CAPI Error:", error);
    }

    // Redirect to WhatsApp
    const whatsappNumber = "5521973514867";
    const message = `Olá, tudo bem? Venho através do Site Domínio Soluções, Meu nome é "${data.name}" Telefone: ${data.phone} E-mail: ${data.email} O motivo do meu contato é: ${data.motivo}`;

    const encodedMessage = encodeURIComponent(message);
    window.dataLayer?.push({ event: "click_whatsapp" });
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  // Reset form when dialog closes
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-slate-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-900">
            Solicitar Proposta
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="dialog-name"
                className={errors.name ? "text-red-500" : ""}
              >
                Nome
              </Label>
              <Input
                id="dialog-name"
                placeholder="Seu nome"
                className={
                  errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
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
                htmlFor="dialog-phone"
                className={errors.phone ? "text-red-500" : ""}
              >
                WhatsApp
              </Label>
              <Input
                id="dialog-phone"
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
              htmlFor="dialog-email"
              className={errors.email ? "text-red-500" : ""}
            >
              E-mail
            </Label>
            <Input
              id="dialog-email"
              type="email"
              placeholder="seuemail@gmail.com"
              className={
                errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
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
              htmlFor="dialog-motivo"
              className={errors.motivo ? "text-red-500" : ""}
            >
              Motivo
            </Label>
            <select
              id="dialog-motivo"
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
              <option value="Departamento Pessoal">Departamento Pessoal</option>
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
      </DialogContent>
    </Dialog>
  );
}
