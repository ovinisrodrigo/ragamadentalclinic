import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-teal-600 p-2 relative z-50">
      <div className="flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={56} height={56} className="md:w-[73px] md:h-[73px]" />
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <ul className="flex gap-6 md:gap-20 text-sm md:text-base">
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