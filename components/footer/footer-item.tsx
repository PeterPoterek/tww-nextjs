interface FooterItemProps {
  label: string;
  data: {
    dataLabel: string;
    value: string;
  }[];
}

const FooterItem = ({ label, data }: FooterItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-center sm:items-start text-white">
      <h4 className="text-xl font-bold mb-2">{label}</h4>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-1 text-sm text-center sm:text-left"
        >
          <span className="uppercase font-medium">{item.dataLabel}:</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
