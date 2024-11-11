import Link from "next/link";
import { auth } from "@/app/auth";
const Navbar = async () => {
  const session = await auth();

  return (
    <div>
      <menu className="flex gap-5 justify-center items-center p-5">
        <li>
          <Link href="/">Home</Link>
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
