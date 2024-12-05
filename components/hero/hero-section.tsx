"use client";

import Image from "next/image";
import tww from "../../public/tww-hero.svg";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Suspense, lazy } from "react";

const LazyHeroButton = lazy(() => import("./hero-button"));

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id={"landing"} className="relative min-h-screen">
      <Image
        src="/landing-image.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={shouldReduceMotion ? {} : fadeInVariants}
      >
        <div className="flex max-w-[1108px] flex-col">
          <motion.div
            variants={shouldReduceMotion ? {} : fadeInVariants}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={tww}
              alt="TWW logo"
              className="mb-3.5"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,..."
            />
          </motion.div>
          <motion.h1
            className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold"
            variants={shouldReduceMotion ? {} : fadeInVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologia Wykonania Wnętrz
          </motion.h1>
          <motion.p
            className="mb-8 sm:mb-10 max-w-[927px] text-lg sm:text-xl md:text-2xl font-light"
            variants={shouldReduceMotion ? {} : fadeInVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nasza firma remontowa oferuje usługi najwyższej jakości, dbając o
            każdy detal. Zadowolenie klientów jest naszym priorytetem - dołącz
            do nich i skorzystaj z naszych usług już dziś!
          </motion.p>
          <motion.div
            className="flex justify-center sm:justify-end"
            variants={shouldReduceMotion ? {} : fadeInVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Link href="/gallery">
                <LazyHeroButton>Realizacje</LazyHeroButton>
              </Link>
            </Suspense>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
