"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const ContactButton = () => {
  return (
    <div className="flex gap-4">
      <motion.a
        href="mailto:poterpiotr@gmail.com"
        className="inline-flex items-center gap-2 text-white text-lg font-bold uppercase bg-sky-800 py-3 px-5 rounded-md transition-colors duration-300 hover:bg-sky-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail size={20} />
        Napisz e-mail
      </motion.a>
      <motion.a
        href="tel:696075595"
        className="inline-flex items-center gap-2 text-sky-800 text-lg font-bold uppercase bg-white border-2 border-sky-800 py-3 px-5 rounded-md transition-colors duration-300 hover:bg-sky-800 hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={20} />
        Zadzwoń
      </motion.a>
    </div>
  );
};

export default ContactButton;
