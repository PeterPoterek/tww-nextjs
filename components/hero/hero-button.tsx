"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroButtonProps {
  children: ReactNode;
}

const HeroButton = ({ children }: HeroButtonProps) => {
  return (
    <motion.button
      className="max-w-[214px] text-secondary font-bold uppercase bg-primary py-3.5 px-14"
      whileHover={{
        outline: "3px solid #075985",
        color: "#075985",
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.button>
  );
};

export default HeroButton;