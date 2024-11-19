"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarLinkProps {
  path: string;
  text: string;
}

const NavbarLink = ({ path, text }: NavbarLinkProps) => {
  return (
    <li className="cursor-pointer text-primary">
      <Link href={path}>
        <motion.div whileHover={{ color: "#0288d1" }} transition={{ duration: 0.3 }}>
          {text}
          <motion.div />
        </motion.div>
      </Link>
    </li>
  );
};

export default NavbarLink;
