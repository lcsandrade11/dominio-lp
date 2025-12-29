import { z } from "zod";

// Brazilian phone validation: DDD (2 digits) + 9 (mobile prefix) + 8 digits = 11 total
const PHONE_REGEX = /^\d{11}$/;

// Valid Brazilian DDDs
const VALID_DDDS = [
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19", // SP
  "21",
  "22",
  "24", // RJ
  "27",
  "28", // ES
  "31",
  "32",
  "33",
  "34",
  "35",
  "37",
  "38", // MG
  "41",
  "42",
  "43",
  "44",
  "45",
  "46", // PR
  "47",
  "48",
  "49", // SC
  "51",
  "53",
  "54",
  "55", // RS
  "61", // DF
  "62",
  "64", // GO
  "63", // TO
  "65",
  "66", // MT
  "67", // MS
  "68", // AC
  "69", // RO
  "71",
  "73",
  "74",
  "75",
  "77", // BA
  "79", // SE
  "81",
  "87", // PE
  "82", // AL
  "83", // PB
  "84", // RN
  "85",
  "88", // CE
  "86",
  "89", // PI
  "91",
  "93",
  "94", // PA
  "92",
  "97", // AM
  "95", // RR
  "96", // AP
  "98",
  "99", // MA
];

export const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres").trim(),
  email: z.string().email("Digite um e-mail válido").trim().toLowerCase(),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, "")) // Strip mask first
    .refine((val) => PHONE_REGEX.test(val), {
      message: "Digite o telefone completo (DDD + 9 dígitos)",
    })
    .refine((val) => VALID_DDDS.includes(val.slice(0, 2)), {
      message: "DDD inválido",
    })
    .refine((val) => val.charAt(2) === "9", {
      message: "Celular deve começar com 9",
    }),
  motivo: z.string().min(1, "Selecione o motivo do contato"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
