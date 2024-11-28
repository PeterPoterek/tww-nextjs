"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarLinkProps {
  path: string;
  text: string;
  onClick?: () => void;
}

const NavbarLink = ({ path, text, onClick }: NavbarLinkProps) => {
  return (
    <li className="cursor-pointer text-primary">
      <Link href={path} onClick={onClick}>
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
