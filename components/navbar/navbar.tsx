import Link from "next/link";
import { auth } from "@/app/auth";
import NavbarLogo from "./navbar-logo";

const Navbar = async () => {
  const session = await auth();

  return (
    <div>
      <menu className="flex gap-5 justify-center items-center p-4">
        <li>
          <Link href="/">
            <NavbarLogo />
          </Link>
        </li>

        <li>{!session ? <Link href="/login">Login</Link> : <Link href="/dashboard">Dashboard</Link>}</li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </menu>
    </div>
  );
};

export default Navbar;
