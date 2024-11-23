interface FooterItemProps {
  label: string;
  data: {
    dataLabel: string;
    value: string;
  }[];
}

const FooterItem = ({ label, data }: FooterItemProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-4xl font-black">{label}</h4>
      {data.map((item, index) => (
        <div key={index} className="flex gap-2.5 text-xl  ">
          <span className={"uppercase"}>{item.dataLabel}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
