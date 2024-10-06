// components
import Image from "next/image";

// utils
import { useTranslations } from "next-intl";
import ScrollAnimation from "react-animate-on-scroll";

export default function FounderBanner({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section className="founderBanner bg-zinc-50 w-full flex justify-center py-24 overflow-hidden">
      <div className="founderBanner-container w-11/12 flex flex-col sm:flex-row max-w-screen-xl">
        <div className="founderBanner-left w-full sm:w-1/2">
          <div className="founderBanner-left-content flex">
            <ScrollAnimation className="relative" animateIn="fadeIn">
              <Image
                width="150"
                height="150"
                alt={t("imageAlt")}
                src={t("image")}
              />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInUp"
              delay={300}
              className="h-[150px] flex flex-col justify-center pl-8"
            >
              <h3 className="text-primary-dark text-xl md:text-3xl primary-font">
                {t("header")}
              </h3>
              <h4 className="text-primary-green py-1 tailroad-font text-base md:text-xl ">
                {t("title")}
              </h4>
              <p className="text-primary-dark primary-font text-base md:text-lg">
                {t("email")}
              </p>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation
          animateIn="slideInRight"
          delay={500}
          className="founderBanner-right w-full pt-16 md:pt-0 md:w-1/2 flex items-center justify-center sm:justify-end"
        >
          <h2 className="text-5xl md:text-6xl tailroad-font text-primary-green">
            {t("tagline")}
          </h2>
        </ScrollAnimation>
      </div>
    </section>
  );
}
