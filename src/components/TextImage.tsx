import { TextImageProps } from "@/types";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import SimpleButtonLink from "./SimpleButtonLink";

export default function TextImage({
  header,
  image,
  text,
  link,
  linkText,
  backgroundColour = "bg-zinc-50",
}: TextImageProps) {
  return (
    <section className={`${backgroundColour} py-36 flex justify-center w-full`}>
      <div className="w-11/12 max-w-screen-2xl flex justify-between">
        {/* Left Column */}
        <ScrollAnimation className="w-2/5" animateIn="fadeInUp">
          <h2 className="text-4xl text-primary-dark  mb-16">{header}</h2>
        </ScrollAnimation>
        {/* Right Column */}

        <div className="w-3/5 flex flex-col">
          <ScrollAnimation
            animateIn="fadeIn"
            className="w-full relative h-[800px]"
          >
            <Image
              src={image}
              alt={`image for ${header}`}
              fill={true}
              objectFit="cover"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" className="w-full">
            <p className="text-2xl roboto text-primary-dark pt-12">{text}</p>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            className="w-full flex justify-end"
          >
            <SimpleButtonLink internalLink={true} text={linkText} link={link} />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
