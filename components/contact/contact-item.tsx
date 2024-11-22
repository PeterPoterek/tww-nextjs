interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem = ({ label, value }: ContactItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 font-black text-lg sm:text-xl lg:text-2xl uppercase">
      <span className="mb-1 sm:mb-0">{label}:</span>
      <span className="font-normal break-all">{value}</span>
    </div>
  );
};

export default ContactItem;
