"use client";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.button
      className="max-w-[214px] self-center text-secondary text-xl font-bold uppercase bg-primary py-3.5 px-5"
      whileHover={{
        outline: "3px solid #075985",
        color: "#075985",
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <a className={"uppercase"} href="">
        Napisz e-mail
      </a>
    </motion.button>
  );
};

export default ContactButton;
