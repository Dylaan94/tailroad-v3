import { SimpleButtonLinkProps } from "../types";
import Link from "next/link";

export default function SimpleButtonLink({
  internalLink,
  text,
  link,
  bgColour = "bg-primary-green",
  textColour = "text-white",
  textSize = "lg:text-3xl",
}: SimpleButtonLinkProps) {
  return internalLink ? (
    <Link
      className={`${bgColour} ${textColour} ${textSize} my-6 tailroad-font font-light hover:bg-white hover:text-primary-green border border-primary-green px-4 pt-2 pb-[0.6rem] lg:px-8 lg:py-4 rounded-full block w-fit `}
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
