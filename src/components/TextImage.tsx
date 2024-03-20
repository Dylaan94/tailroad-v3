import { TextImageProps } from "@/types";

export default function TextImage({
  header,
  image,
  text,
  link,
  linkText,
  backgroundColour = "bg-zinc-50",
}: TextImageProps) {
  return <section className={`${backgroundColour} py-28`}></section>;
}
