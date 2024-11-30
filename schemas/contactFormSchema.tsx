import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Imię musi mieć co najmniej 2 znaki" })
    .max(50, { message: "Imię nie może przekraczać 50 znaków" }),
  email: z
    .string()
    .email({ message: "Nieprawidłowy adres email" })
    .max(100, { message: "Email nie może przekraczać 100 znaków" }),
  message: z
    .string()
    .min(10, { message: "Wiadomość musi mieć co najmniej 10 znaków" })
    .max(500, { message: "Wiadomość nie może przekraczać 500 znaków" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
