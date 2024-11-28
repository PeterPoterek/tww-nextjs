"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-stone-700 border-gray-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50 px-4 py-2"
          placeholder="Wpisz swoje imię i nazwisko"
        />
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-stone-700 border-gray-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50 px-4 py-2"
          placeholder="Wpisz swój adres email"
        />
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
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-stone-700 border-gray-600 text-white shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-400 focus:ring-opacity-50 px-4 py-2"
          placeholder="Wpisz swoją wiadomość"
        ></textarea>
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
