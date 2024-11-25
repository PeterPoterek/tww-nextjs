import twwlogo from "../../public/twwlogo.svg";
import Image from "next/image";

const NavbarLogo = () => {
  return (
    <Image
      priority
      src={twwlogo}
      alt="TWW Logo"
      className="w-[120px] sm:w-[180px] md:w-[235px] h-auto"
    />
  );
};

export default NavbarLogo;
