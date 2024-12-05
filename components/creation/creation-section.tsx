"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const CreationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id={"creation"}
      ref={ref}
      className="max-w-[966px] pt-[8.5rem] m-0 mx-auto scroll-mt-28"
    >
      <motion.div
        className="flex flex-col justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-black text-center mb-20"
          variants={itemVariants}
        >
          Etapy Tworzenia
        </motion.h2>

        <motion.div
          className="relative flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-6 items-center"
            variants={itemVariants}
          >
            <Image
              src={"/creation1.svg"}
              width={120}
              height={120}
              alt={"Konsultacja i planowanie"}
            />
            <span className="text-2xl font-black text-center">
              Konsultacja i planowanie
            </span>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-5"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 items-center"
            variants={itemVariants}
          >
            <Image
              src={"/creation2.svg"}
              width={120}
              height={120}
              alt={"Wykonywanie prac remontowych"}
            />
            <span className="text-2xl font-black text-center">
              Wykonywanie prac remontowych
            </span>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-5"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 items-center"
            variants={itemVariants}
          >
            <Image
              src={"/creation3.svg"}
              width={120}
              height={120}
              alt={"Zakonczenie i kontrola jakości"}
            />
            <span className="text-2xl font-black text-center">
              Zakonczenie i kontrola jakości
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="font-light text-2xl text-center mt-20 pb-20">
          Ważne jest, aby pamiętać, że każdy remont może się różnić w zależności
          od konkretnych wymagań klienta i zakresu prac. Nasza firma dostosuje
          się do indywidualnych potrzeb i zapewni kompleksową obsługę na każdym
          etapie procesu remontowego.
        </p>
      </motion.div>
    </section>
  );
};

export default CreationSection;
