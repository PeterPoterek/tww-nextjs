interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem = ({ label, value }: ContactItemProps) => {
  return (
    <div className="flex gap-8 font-black text-2xl uppercase">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default ContactItem;
