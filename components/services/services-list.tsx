import { Separator } from "@/components/ui/separator";

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
    <div className="w-[220px] sm:w-[290px] md:w-[250px] lg:w-[300px] h-[250px] flex flex-col bg-stone-800 p-3 rounded-md gap-2">
      <div className="flex gap-3 justify-center items-center p-1">
        {icon}
        <h3 className="text-slate-200 font-bold">{label}</h3>
      </div>

      <Separator className="bg-sky-800 h-[1px]" />

      <ul className="flex flex-col gap-1">
        {services.map((service) => (
          <li key={service} className="text-slate-200">
            - {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
