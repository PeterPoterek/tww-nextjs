"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroButtonProps {
  children: ReactNode;
}

const HeroButton = ({ children }: HeroButtonProps) => {
  return (
    <motion.button
      className="max-w-[214px] text-secondary font-bold uppercase bg-primary py-3.5 px-14 hover:outline hover:outline-3 hover:outline-[#075985] hover:text-[#075985] transition-colors duration-100 ease-in-out"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  );
};

export default HeroButton;
