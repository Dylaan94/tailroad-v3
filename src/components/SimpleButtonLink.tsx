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
      className={`${bgColour} ${textColour} my-6 hover:bg-white hover:text-primary-green border border-primary-green px-4 py-2 lg:text-lg rounded-lg block w-fit `}
      href={link}
    >
      {text}
    </Link>
  ) : (
    <a href={link}> {text} </a>
  );
}
