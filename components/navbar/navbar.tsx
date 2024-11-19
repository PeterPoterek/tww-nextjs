import Link from "next/link";
import NavbarLogo from "./navbar-logo";
import NavbarLink from "./navbar-link";

const Navbar = async () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex gap-5 justify-center items-center p-4 bg-stone-900 border-sky-800 border-b-4 z-50">
      <div>
        <Link href="/">
          <NavbarLogo />
        </Link>
      </div>

      <menu className="flex gap-6 text-base font-semibold uppercase ml-[54px] mr-[107px]">
        <NavbarLink path="/" text="Strona Głowna" />
        <NavbarLink path="/gallery" text="Realizacje" />
        <NavbarLink path="/#contact" text="Kontakt" />
        <NavbarLink path="certificates" text="Certyfikaty" />
      </menu>

      <div>
        <span className="text-xl font-bold">696-075-595</span>
      </div>
    </nav>
  );
};

export default Navbar;
