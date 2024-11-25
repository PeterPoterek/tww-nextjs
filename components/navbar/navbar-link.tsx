"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface NavbarLinkProps {
  path: string;
  text: string;
  scroll?: boolean;
  onClick?: () => void;
}

const NavbarLink = ({ path, text, onClick }: NavbarLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <li className="cursor-pointer text-primary">
      <a href={path} onClick={handleClick}>
        <motion.div
          whileHover={{ color: "#0288d1" }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.div>
      </a>
    </li>
  );
};

export default NavbarLink;
