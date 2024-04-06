import { TextImageStackProps } from "@/types";

// components
import SimpleButtonLink from "./SimpleButtonLink";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

export default function TextImageStack({
  image,
  header,
  text_1,
  text_2,
  link,
  linkText,
  imageLeft = true,
  delay = 0,
}: TextImageStackProps) {
  return (
    <section
      className={`textImageStack ${
        imageLeft ? "flex-row" : "flex-row-reverse"
      } flex min-h-[500px] items-center mb-24`}
    >
      <ScrollAnimation
        animateIn="fadeIn"
        delay={500 * delay}
        className={` ${
          imageLeft ? "mr-16" : "ml-16"
        } caseStudyImage relative w-3/5  h-full `}
      >
        <Image
          src={image || ""}
          alt={`image for ${header} image in image stack` || ""}
          fill={true}
          sizes="800px"
          className="object-contain"
        />
      </ScrollAnimation>

      <ScrollAnimation
        className="caseStudyText w-2/5 "
        animateIn="fadeIn"
        delay={600 * delay}
      >
        <h3 className="text-4xl mb-12 secondary-font ">{header}</h3>
        <p className="mb-4 text-xl primary-font">{text_1}</p>
        <p className="mb-4 text-xl primary-font">{text_2}</p>

        <SimpleButtonLink
          internalLink={true}
          text={linkText || ""}
          link={link || ""}
        />
      </ScrollAnimation>
    </section>
  );
}
