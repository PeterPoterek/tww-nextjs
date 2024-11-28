"use client";

import {
  contactFormSchema,
  ContactFormData,
} from "@/schemas/contactFormSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-800 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-150 ease-in-out"
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
