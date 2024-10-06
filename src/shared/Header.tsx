import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // create links object to be mapped over
  const links: { href: string; label: string }[] = [
    { href: "/", label: "home" },
    { href: "/about-us", label: "about us" },
    { href: "/our-services", label: "our services" },
    { href: "/our-approach", label: "our approach" },
    { href: "/our-work", label: "our work" },
    { href: "/contact", label: "contact" },
  ];

  // State to control the menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-24 fadeInDelay5 flex justify-center w-full bg-transparent absolute z-50 top-0 left-0 tailroad-font">
      <div className="flex items-center justify-between w-[95%]">
        <Link href="/">
          <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
        </Link>
        {/* Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex">
          <ul className="flex">
            {links.map(({ href, label }) => (
              <li className="px-2" key={`${href}${label}`}>
                <Link className="text-white" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-primary-dark text-white transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-start px-8 pt-20 space-y-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link
                onClick={toggleMenu}
                href={href}
                className="text-white text-lg"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
