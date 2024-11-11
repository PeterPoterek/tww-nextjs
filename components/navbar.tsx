import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <menu className="flex gap-5 justify-center items-center p-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </menu>
    </div>
  );
};

export default Navbar;
