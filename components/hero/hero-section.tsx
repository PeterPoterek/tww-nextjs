"use client";

import Image from "next/image";
import tww from "../../public/tww-hero.svg";
import Link from "next/link";
import HeroButton from "./hero-button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/bg-test.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex max-w-[1108px] flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologia Wykonania Wnętrz
          </motion.h1>
          <motion.p
            className="mb-8 sm:mb-10 max-w-[927px] text-lg sm:text-xl md:text-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nasza firma remontowa oferuje usługi najwyższej jakości, dbając o
            każdy detal. Zadowolenie klientów jest naszym priorytetem - dołącz
            do nich i skorzystaj z naszych usług już dziś!
          </motion.p>
          <motion.div
            className="flex justify-center sm:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/gallery">
              <HeroButton>Realizacje</HeroButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
