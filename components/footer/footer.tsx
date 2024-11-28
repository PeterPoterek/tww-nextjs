import Image from "next/image";
import Link from "next/link";
import FooterItem from "@/components/footer/footer-item";
import { Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerData = [
    {
      label: "Firma",
      data: [
        { dataLabel: "Imię", value: "Piotr" },
        { dataLabel: "Nazwisko", value: "Poterek" },
        { dataLabel: "NIP", value: "9441361022" },
      ],
    },
    {
      label: "Adres",
      data: [
        { dataLabel: "Kraj", value: "Polska" },
        { dataLabel: "Miasto", value: "Kraków" },
        { dataLabel: "Ulica", value: "Skotnicka 82 A" },
      ],
    },
    {
      label: "Kontakt",
      data: [
        { dataLabel: "Telefon", value: "696 075 595" },
        { dataLabel: "Email", value: "poterpiotr@gmail.com" },
      ],
    },
  ];

  return (
    <footer className="bg-stone-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Strona główna">
              <Image
                src="/logo-footer.svg"
                alt="Technologia Wykonania Wnętrz logo"
                width={240}
                height={44}
                className="mb-4"
              />
            </Link>
            <p className="text-white text-sm mb-4">
              Specjaliści w wykończeniach łazienek i kuchni. Oferujemy
              kompleksowe usługi remontowe dostosowane do Twoich potrzeb.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550560695492"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/piotr-poterek-74969387/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <Link
                href="/#contact"
                className="text-white hover:text-sky-800 transition-colors"
                aria-label="Kontakt email"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
          {footerData.map((item, index) => (
            <FooterItem key={index} label={item.label} data={item.data} />
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Technologia Wykonania Wnętrz.
            Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
