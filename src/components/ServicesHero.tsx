// components
import Image from "next/image";

// utils
import { useTranslations } from "next-intl";
import SimpleButtonLink from "./SimpleButtonLink";

export default function ServicesHero({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section
      className={`servicesHero relative flex justify-center bg-primary-dark h-[90vh] w-full`}
    >
      <div className="serviceHero-right w-full relative h-full fadeInSlow">
        {/* Image with clip path */}
        <Image
          fill={true}
          sizes="100vw"
          className="[clip-path:polygon(55%_0,100%_0,100%_100%,45%_100%)] opacity-30 md:opacity-80 object-cover"
          src={t("image")}
          alt={t("imageAlt")}
        />
      </div>

      {/* Content */}

      <div className="serviceHero-container pt-24 r w-11/12 h-full max-w-screen-xl  absolute">
        <div className="servicesHero-content h-full justify-center flex flex-col w-full md:w-[40%] ">
          <h1 className="text-primary-green fadeInUp text-6xl tailroad-font pb-6">
            {t("header")}
          </h1>
          <p className="text-white primary-font fadeInUp animation-delay-500 text-xl pb-6">
            {t("description_1")}
          </p>
          <p className="text-white pb-8 primary-font fadeInUp animation-delay-800 text-xl">
            {t("description_2")}
          </p>
          <span className="fadeInUp animation-delay-1000">
            <SimpleButtonLink
              internalLink={true}
              text={t("linkText")}
              link={t("link")}
              textSize="lg:text-xl"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
