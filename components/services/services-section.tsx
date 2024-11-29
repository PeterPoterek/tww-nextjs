"use client";

import ServicesList from "@/components/services/services-list";
import SectionHeader from "@/components/section-header";
import { MdHomeRepairService } from "react-icons/md";
import { FaPaintRoller, FaTools } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  interface Service {
    label: string;
    icon: JSX.Element;
    services: string[];
  }

  const servicesData: Service[] = [
    {
      label: "Remonty mieszkań",
      icon: <MdHomeRepairService size={32} className="text-sky-800" />,
      services: [
        "Renowacje mieszkań",
        "Remont łazienki",
        "Remonty kuchni",
        "Wykończenia łazienek",
      ],
    },
    {
      label: "Wykończenia wnętrz",
      icon: <FaPaintRoller size={32} className="text-sky-800" />,
      services: [
        "Tapetowanie",
        "Malowanie ścian",
        "Układanie paneli podłogowych",
      ],
    },
    {
      label: "Prace wykończeniowe",
      icon: <FaTools size={32} className="text-sky-800" />,
      services: [
        "Układanie glazury",
        "Montaż płyt gipsowych",
        "Montaż sufitów podwieszanych",
      ],
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center gap-5 max-w-[966px] m-0 mx-auto py-[7rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeader text={"Usługi"} />
      </motion.div>

      <motion.div
        className="flex gap-5 justify-center items-center flex-col lg:flex-row lg:justify-between flex-wrap lg:flex-nowrap"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.label}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ServicesList
              label={service.label}
              icon={service.icon}
              services={service.services}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
