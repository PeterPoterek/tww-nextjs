"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./navbar-logo";
import NavbarLink from "./navbar-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-stone-900 border-sky-800 border-b-4 z-50">
      <div className="max-w-[1440px] mx-auto flex gap-5 justify-between items-center p-4">
        <div>
          <Link href="/">
            <NavbarLogo />
          </Link>
        </div>

        <menu className="hidden lg:flex gap-6 text-base font-semibold uppercase">
          <NavbarLink path="/" text="Strona Głowna" />
          <NavbarLink path="/gallery" text="Realizacje" scroll={false} />
          <NavbarLink path="/#contact" text="Kontakt" />
          <NavbarLink path="certificates" text="Certyfikaty" />
        </menu>

        <div className="hidden lg:block">
          <span className="text-xl font-bold text-primary">696-075-595</span>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X size={32} className="md:w-10 md:h-10" />
          ) : (
            <Menu size={32} className="md:w-10 md:h-10" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-full max-w-[1440px] mx-auto bg-stone-900 z-50 flex flex-col items-center justify-center overflow-hidden"
            >
              <button
                className="absolute top-4 right-4 text-primary"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={32} className="md:w-10 md:h-10" />
              </button>
              <menu className="flex flex-col gap-6 text-xl font-semibold uppercase">
                <NavbarLink
                  path="/"
                  text="Strona Głowna"
                  onClick={toggleMenu}
                />
                <NavbarLink
                  path="/gallery"
                  text="Realizacje"
                  scroll={false}
                  onClick={toggleMenu}
                />
                <NavbarLink
                  path="/#contact"
                  text="Kontakt"
                  onClick={toggleMenu}
                />
                <NavbarLink
                  path="certificates"
                  text="Certyfikaty"
                  onClick={toggleMenu}
                />
              </menu>
              <div className="mt-8">
                <span className="text-2xl font-bold text-primary">
                  696-075-595
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
