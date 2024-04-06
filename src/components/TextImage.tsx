import { TextImageProps } from "@/types";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import SimpleButtonLink from "./SimpleButtonLink";
import { useTranslations } from "next-intl";

export default function TextImage({
  contentSelector,
  backgroundColour = "bg-zinc-50",
}: {
  contentSelector: string;
  backgroundColour?: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section className={`${backgroundColour} py-36 flex justify-center w-full`}>
      <div className="w-11/12 max-w-screen-2xl flex justify-between">
        {/* Left Column */}
        <ScrollAnimation className="w-2/5" animateIn="fadeInUp">
          <h2 className="text-4xl secondary-font text-primary-dark  mb-16">
            {t("header")}
          </h2>
        </ScrollAnimation>
        {/* Right Column */}

        <div className="w-3/5 flex flex-col">
          <ScrollAnimation
            animateIn="fadeIn"
            className="w-full relative h-[800px]"
          >
            <Image
              src={t("image")}
              alt={`image for ${t("header")}`}
              fill={true}
              sizes="800px"
              className="object-cover"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" className="w-full">
            <p className="text-2xl primary-font text-primary-dark pt-12">
              {t("text")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            className="w-full flex justify-end"
          >
            <SimpleButtonLink
              internalLink={true}
              text={t("linkText")}
              link={t("link")}
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
