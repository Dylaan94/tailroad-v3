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

  return (
    <header className="h-24 fadeInDelay5 flex justify-center w-full bg-transparent absolute z-50 top-0 left-0 tailroad-font ">
      <div className=" items-center flex justify-between w-[95%] ">
        <Link href="/">
          <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
        </Link>
        <nav>
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
    </header>
  );
}
