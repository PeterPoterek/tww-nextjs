import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface ServicesListProps {
  label: string;
  services: string[];
  icon: JSX.Element;
}

const ServicesList: React.FC<ServicesListProps> = ({
  label,
  services,
  icon,
}) => {
  return (
    <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="bg-sky-800 p-4 flex items-center justify-center ">
        {icon}
      </div>
      <div className="p-6 min-h-[234px]">
        <h3 className="text-2xl font-bold text-slate-200 mb-4">{label}</h3>
        <Separator className="bg-sky-800 h-[2px] mb-4" />
        <ul className="space-y-2">
          {services.map((service) => (
            <motion.li
              key={service}
              className="flex items-center text-slate-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-4 h-4 mr-2 text-sky-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {service}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesList;
