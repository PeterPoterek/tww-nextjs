import { Phone, MapPin, Mail, FileText } from "lucide-react";

interface ContactItemProps {
  icon: "phone" | "map-pin" | "mail" | "file-text";
  label: string;
  value: string;
}

const iconComponents = {
  phone: Phone,
  "map-pin": MapPin,
  mail: Mail,
  "file-text": FileText,
};

const ContactItem = ({ icon, label, value }: ContactItemProps) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="flex items-start gap-4">
      <div className="text-sky-800">
        <IconComponent size={24} />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{label}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;
