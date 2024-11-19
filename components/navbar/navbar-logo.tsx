import twwlogo from "../../public/twwlogo.svg";
import Image from "next/image";

const NavbarLogo = () => {
  return <Image priority src={twwlogo} alt="Follow us on Twitter" />;
};

export default NavbarLogo;
