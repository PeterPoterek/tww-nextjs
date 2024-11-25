"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarLinkProps {
  path: string;
  text: string;
  scroll?: boolean;
  onClick?: () => void;
}

const NavbarLink = ({
  path,
  text,
  scroll = true,
  onClick,
}: NavbarLinkProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li className="cursor-pointer text-primary">
      <Link href={path} scroll={scroll} onClick={handleClick}>
        <motion.div
          whileHover={{ color: "#0288d1" }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.div>
      </Link>
    </li>
  );
};

export default NavbarLink;
