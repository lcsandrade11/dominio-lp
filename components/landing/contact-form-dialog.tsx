"use client";

import { useState } from "react";
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

interface ContactFormDialogProps {
  triggerText?: string;
  triggerClassName?: string;
}

export function ContactFormDialog({
  triggerText = "Falar com Especialista",
  triggerClassName,
}: ContactFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // 1. Prepare Data for your existing API (Elementor Format)
    const apiPayload = new URLSearchParams();
    apiPayload.append("form_fields[nome]", data.name as string);
    apiPayload.append("form_fields[email]", data.email as string);
    apiPayload.append("form_fields[celular]", data.phone as string);
    apiPayload.append("form_fields[motivo]", data.motivo as string);

    // Tracking Data
    apiPayload.append("form_fields[fbp]", getCookie("_fbp"));
    apiPayload.append("form_fields[fbc]", getCookie("_fbc"));
    apiPayload.append("form_fields[event_id]", generateEventId());
    apiPayload.append("form_fields[page_url]", window.location.href);
    apiPayload.append("form_fields[user_agent]", navigator.userAgent);

    try {
      // 2. Trigger your CAPI Worker (Replace with your actual Worker URL)
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

    // 3. Construct WhatsApp Message and Redirect
    const whatsappNumber = "5521973514867"; // Your number
    const message = `Olá, tudo bem? Venho através do Site Domínio Soluções, Meu nome é "${data.name}" Telefone: ${data.phone} E-mail: ${data.email} O motivo do meu contato é: ${data.motivo}`;

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-slate-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-900">
            Solicitar Proposta
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dialog-name">Nome</Label>
              <Input
                id="dialog-name"
                name="name"
                required
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dialog-phone">WhatsApp</Label>
              <Input
                id="dialog-phone"
                name="phone"
                required
                placeholder="(21) 99999-9999"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-email">E-mail</Label>
            <Input
              id="dialog-email"
              name="email"
              type="email"
              required
              placeholder="seuemail@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-motivo">Motivo</Label>
            <select
              id="dialog-motivo"
              name="motivo"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
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
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg"
          >
            {loading ? "Enviando..." : "Falar com Especialista"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
