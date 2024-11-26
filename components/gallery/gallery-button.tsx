"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GalleryButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const GalleryButton = ({
  children,
  onClick,
  disabled = false,
}: GalleryButtonProps) => {
  return (
    <motion.button
      className={`
        max-w-[214px] text-secondary font-bold uppercase bg-primary py-3.5 px-14
        ${disabled ? "opacity-50 cursor-default" : "cursor-pointer"}
      `}
      whileHover={
        disabled
          ? {}
          : {
              outline: "3px solid #075985",
              color: "#075985",
            }
      }
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default GalleryButton;
