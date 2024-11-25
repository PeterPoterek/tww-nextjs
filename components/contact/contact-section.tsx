"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/section-header";
import ContactItem from "@/components/contact/contact-item";
import ContactButton from "@/components/contact/contact-button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col max-w-[927px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 scroll-mt-28"
    >
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <SectionHeader text="Kontakt" />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <ContactItem label="Telefon" value="696-075-595" />
          <ContactItem label="Adres" value="Skotnicka 82 A, Kraków" />
          <ContactItem label="Email" value="poterpiotr@gmail.com" />
          <ContactItem label="Nip" value="9441361022" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <ContactButton />
      </motion.div>
    </section>
  );
};

export default ContactSection;
