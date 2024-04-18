import { SimpleButtonLinkProps } from "../types";
import Link from "next/link";

export default function SimpleButtonLink({
  internalLink,
  text,
  link,
  bgColour = "bg-primary-green",
  textColour = "text-white",
}: SimpleButtonLinkProps) {
  return internalLink ? (
    <Link
      className={`${bgColour} ${textColour} my-6 secondary-font hover:bg-white hover:text-primary-green border border-primary-green px-4 pt-2 pb-[0.6rem] lg:text-lg rounded-lg block w-fit `}
      href={link}
    >
      {text}
    </Link>
  ) : (
    <a className="secondary-font" href={link}>
      {" "}
      {text}{" "}
    </a>
  );
}
