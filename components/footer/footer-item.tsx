interface FooterItemProps {
  label: string;
  data: {
    dataLabel: string;
    value: string;
  }[];
}

const FooterItem = ({ label, data }: FooterItemProps) => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h4 className="text-lg font-bold mb-3">{label}</h4>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col text-sm">
          <span className="text-gray-400">{item.dataLabel}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
