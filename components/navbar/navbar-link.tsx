"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarLinkProps {
  path: string;
  text: string;
  scroll?: boolean;
}

const NavbarLink = ({ path, text, scroll = true }: NavbarLinkProps) => {
  return (
    <li className="cursor-pointer text-primary">
      <Link href={path} scroll={scroll}>
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
