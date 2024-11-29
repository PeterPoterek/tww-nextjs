import ServicesList from "@/components/services/services-list";
import SectionHeader from "@/components/section-header";

import { MdHomeRepairService } from "react-icons/md";
import { FaPaintRoller, FaTools } from "react-icons/fa";

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

  return (
    <section className="flex flex-col justify-center gap-5 max-w-[927px] m-0 mx-auto py-[7rem]">
      <SectionHeader text={"Usługi"} />

      <div className="flex gap-5 justify-center items-center flex-col lg:flex-row lg:justify-between flex-wrap lg:flex-nowrap">
        {servicesData.map((service) => (
          <ServicesList
            key={service.label}
            label={service.label}
            icon={service.icon}
            services={service.services}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
