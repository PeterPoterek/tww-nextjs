import Image from "next/image";
import FooterItem from "@/components/footer/footer-item";

const Footer = () => {
  interface FooterItemData {
    label: string;
    data: {
      dataLabel: string;
      value: string;
    }[];
  }

  const footerData: FooterItemData[] = [
    {
      label: "Firma",
      data: [
        { dataLabel: "Imię", value: "Piotr" },
        { dataLabel: "Nazwisko", value: "Poterek" },
        { dataLabel: "Nip", value: "9441361022" },
      ],
    },
    {
      label: "Adres",
      data: [
        { dataLabel: "Kraj", value: "Polska" },
        { dataLabel: "Kraków", value: "Skotnicka 82 A" },
      ],
    },
    {
      label: "Kontakt",
      data: [
        { dataLabel: "Telefon", value: "696075595" },
        { dataLabel: "Email", value: "poterpiotr@gmail.com" },
      ],
    },
  ];

  return (
    <footer className="bg-stone-800 pt-8 px-[9.5rem] pb-20">
      <Image
        className="absolute left-2/4"
        src="/logo-footer.svg"
        alt="logo"
        width={240}
        height={44}
      />
      <span className="font-bold text-xl mr-[18.5rem]">Dane rejestrowe</span>
      <div className="mt-10 flex gap-[10rem]">
        {footerData.map((item, index) => (
          <FooterItem key={index} label={item.label} data={item.data} />
        ))}
        <div className={"flex flex-col items-end gap-6 text-4xl font-black"}>
          <h4>Kontakt w dni robocze</h4>
          <span>9-19</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
