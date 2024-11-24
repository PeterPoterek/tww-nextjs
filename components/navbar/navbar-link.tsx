"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface NavbarLinkProps {
  path: string;
  text: string;
}

const NavbarLink = ({ path, text }: NavbarLinkProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.hash === "#contact") {
        const element = document.querySelector("#contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (path.startsWith("/#")) {
      const targetId = path.substring(2);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(path);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <li className="cursor-pointer text-primary">
      <Link href={path} onClick={handleClick}>
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
