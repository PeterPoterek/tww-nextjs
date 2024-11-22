"use client";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.a
      href="mailto:poterpiotr@gmail.com"
      className="inline-block max-w-[214px] self-center text-secondary text-xl font-bold uppercase bg-primary py-3.5 px-5 no-underline"
      whileHover={{
        outline: "3px solid #075985",
        color: "#075985",
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      Napisz e-mail
    </motion.a>
  );
};

export default ContactButton;
