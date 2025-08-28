import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-teal-600 p-2 relative z-50">
      <div className="flex items-center justify-between px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={73} height={73} />
        </Link>
        <nav className="flex items-center gap-8">
          <ul className="flex gap-20">
            <li>
              <Link href="/" className="text-white hover:text-teal-200 transition-colors font-semibold">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-teal-200 transition-colors font-semibold">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="text-white hover:text-teal-200 transition-colors font-semibold">
                APPOINTMENTS
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:text-teal-200 transition-colors font-semibold">
                BLOG
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;