import Link from "next/link";
import { auth } from "@/app/auth";
import NavbarLogo from "./navbar-logo";

const Navbar = async () => {
  // const session = await auth();

  return (
    <div className="flex gap-5 justify-center items-center p-4 bg-stone-900 border-sky-500 border-b-4 ">
      <div>
        <Link href="/">
          <NavbarLogo />
        </Link>
      </div>

      <menu className="flex gap-6 text-base font-semibold uppercase ml-[54px] mr-[107px]">
        <li>
          <Link href="/">Strona Główna</Link>
        </li>
        <li>
          <Link href="/gallery">Realizacje</Link>
        </li>
        <li>
          <Link href="/#contact">Kontakt</Link>
        </li>
        <li>
          <Link href="/certificates">Certyfikaty</Link>
        </li>
      </menu>

      <div>
        <span className="text-xl font-bold">696-075-595</span>
      </div>
    </div>
  );
};

export default Navbar;
