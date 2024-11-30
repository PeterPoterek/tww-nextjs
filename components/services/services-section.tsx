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
      icon: <MdHomeRepairService size={40} className="text-stone-800" />,
      services: ["Renowacje mieszkań", "Remont łazienki", "Remonty kuchni"],
    },
    {
      label: "Wykończenia wnętrz",
      icon: <FaPaintRoller size={40} className="text-stone-800" />,
      services: [
        "Wykończenia łazienek",
        "Tapetowanie",
        "Malowanie ścian",
        "Układanie paneli podłogowych",
      ],
    },
    {
      label: "Prace wykończeniowe",
      icon: <FaTools size={40} className="text-stone-800" />,
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <SectionHeader text={"Nasze Usługi"} />
          <p className="mt-4 text-xl text-slate-200">
            Profesjonalne rozwiązania dla Twojego domu
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
      </div>
    </section>
  );
};

export default ServicesSection;
