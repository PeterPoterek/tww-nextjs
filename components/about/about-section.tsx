"use client";

import SectionHeader from "../section-header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section
      className="flex max-w-[927px] m-0 mx-auto pt-20 pb-[8.5rem] scroll-mt-28"
      ref={ref}
    >
      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <SectionHeader text={"O Firmie"} />
        </motion.div>
        <motion.p
          className="text-2xl font-light mt-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Jesteśmy doświadczoną firmą remontową, oferującą kompleksowe
          wykończenie mieszkań i łazienek. Nasze usługi obejmują biały montaż,
          malowanie, malowanie natryskowe, montaż paneli, drzwi, kominki oraz
          kamień ozdobny. Doradzamy w wyborze materiałów, a nasze doświadczenie
          w budownictwie sięga 1991 roku. Terminowość i porządek to nasze główne
          cechy, a po zakończonym remoncie dbamy o czystość. Zapraszamy do
          kontaktu, chętnie przyjedziemy niezobowiązująco omówić zakres remontu.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
