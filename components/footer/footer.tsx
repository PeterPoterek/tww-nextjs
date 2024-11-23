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
    <footer className="bg-stone-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8 sm:flex-row sm:justify-between">
          <Image
            className="mb-6 md:absolute md:left-2/4 md:-translate-x-1/2"
            src="/logo-footer.svg"
            alt="logo"
            width={240}
            height={44}
          />
          <span className="font-bold text-lg text-white">Dane rejestrowe</span>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-between gap-8">
          {footerData.map((item, index) => (
            <FooterItem key={index} label={item.label} data={item.data} />
          ))}
          <div className="flex flex-col items-center sm:items-end gap-2 text-white">
            <h4 className="text-xl font-bold">Kontakt w dni robocze</h4>
            <span className="text-2xl font-black">9-19</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
