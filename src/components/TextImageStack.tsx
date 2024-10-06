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
      } flex flex-col md:flex-row md:min-h-[500px] items-center mb-24`}
    >
      <ScrollAnimation
        animateIn="fadeIn"
        delay={500 * delay}
        className={` ${
          imageLeft ? "md:mr-16" : "md:ml-16"
        } caseStudyImage relative w-full md:w-3/5 h-[200px] mb-4 md:mb-0 md:h-full `}
      >
        <Image
          src={image || ""}
          alt={`image for ${header} image in image stack` || ""}
          fill={true}
          sizes="800px"
          className="object-contain "
        />
      </ScrollAnimation>

      <ScrollAnimation
        className="caseStudyText w-full text-center md:text-left md:w-2/5 "
        animateIn="fadeIn"
        delay={600 * delay}
      >
        <h3 className="text-4xl mb-6 md:mb-12 secondary-font ">{header}</h3>
        <p className="mb-4 text-xl primary-font">{text_1}</p>
        <p className="mb-4 text-xl primary-font">{text_2}</p>

        <SimpleButtonLink
          internalLink={true}
          text={linkText || ""}
          link={link || ""}
          textSize="text-xl md:text-2xl"
          classes="mx-auto md:mx-0"
        />
      </ScrollAnimation>
    </section>
  );
}
