import { OurWorkBlockProps } from "@/types";
import Image from "next/image";

// Components
import SimpleButtonLink from "./SimpleButtonLink";
import ScrollAnimation from "react-animate-on-scroll";
import TextImageStack from "./TextImageStack";

export default function OurWorkBlock({
  header,
  caseStudies,
}: OurWorkBlockProps) {
  return (
    <section className="ourWorkBlock flex justify-center text-primary-dark">
      <div className="w-11/12 max-w-screen-2xl flex flex-col py-44 ">
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="text-4xl mb-12">{header}</h2>
        </ScrollAnimation>
        {caseStudies &&
          caseStudies.map((caseStudy, index) => {
            return (
              <TextImageStack
                image={caseStudy?.image}
                header={caseStudy?.header}
                text_1={caseStudy?.text_1}
                text_2={caseStudy?.text_2}
                link={caseStudy?.link}
                linkText={caseStudy?.linkText}
                imageLeft={index % 2 === 0}
                delay={index + 1}
              />

              //   <div
              //     key={index}
              //     className={` ${
              //       index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              //     } caseStudy flex min-h-[500px] items-center mb-12`}
              //   >
              //     <ScrollAnimation
              //       animateIn="fadeIn"
              //       delay={500 * index}
              //       className={` ${
              //         index % 2 === 0 ? "mr-16" : "ml-16"
              //       } caseStudyImage relative w-3/5  h-full `}
              //     >
              //       <Image
              //         src={caseStudy?.image || ""}
              //         alt={`image for ${caseStudy?.header} case study` || ""}
              //         fill={true}
              //         objectFit="contain"
              //       />
              //     </ScrollAnimation>

              //     <ScrollAnimation
              //       className="caseStudyText w-2/5 "
              //       animateIn="fadeIn"
              //       delay={600 * index}
              //     >
              //       <h3 className="text-2xl mb-12 ">{caseStudy?.header}</h3>
              //       <p className="mb-4">{caseStudy?.text_1}</p>
              //       <p>{caseStudy?.text_2}</p>

              //       <SimpleButtonLink
              //         internalLink={true}
              //         text={caseStudy?.linkText || ""}
              //         link={caseStudy?.link || ""}
              //       />
              //     </ScrollAnimation>
              //   </div>
            );
          })}
      </div>
    </section>
  );
}
