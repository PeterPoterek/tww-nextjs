"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
} from "@/schemas/contactFormSchema";
import emailjs from "emailjs-com";
import { useState } from "react";

const validateEmailJsConfig = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    throw new Error(
      "EmailJS configuration is missing required environment variables",
    );
  }

  return { serviceId, templateId, userId };
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const { serviceId, templateId, userId } = validateEmailJsConfig();

      const emailData = {
        from_name: data.name,
        message: data.message,
        email: data.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        userId,
      );
      console.log("Email sent successfully", response);

      setStatus({
        type: "success",
        message: "Wiadomość została wysłana!",
      });
      reset();
    } catch (error) {
      console.error("Error sending email", error);
      setStatus({
        type: "error",
        message: "Wystąpił błąd. Spróbuj ponownie.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status.message && (
        <div
          className={`text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}
        >
          {status.message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Imię i nazwisko
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 block w-full rounded-md bg-stone-700 border-gray-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50 px-4 py-2"
          placeholder="Wpisz swoje imię i nazwisko"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 block w-full rounded-md bg-stone-700 border-gray-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50 px-4 py-2"
          placeholder="Wpisz swój adres email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Wiadomość
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="mt-1 block w-full rounded-md bg-stone-700 border-gray-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50 px-4 py-2"
          placeholder="Wpisz swoją wiadomość"
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-800 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-150 ease-in-out"
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
