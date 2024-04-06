import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

export default function OurBrands({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  const brands = [
    "brand_1",
    "brand_2",
    "brand_3",
    "brand_4",
    "brand_5",
    "brand_6",
  ];

  return (
    <section className="bg-secondary-green py-32 flex justify-center">
      <div className="w-11/12 max-w-screen-2xl flex flex-col items-center">
        <ScrollAnimation animateIn="fadeInUp">
          <h3 className="text-4xl text-primary-dark secondary-font text-center mb-20">
            {t("header")}
          </h3>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center">
          {brands.map(
            (brand, index) =>
              t(`${brand}.name`) !== "" && (
                <ScrollAnimation
                  animateIn="fadeInUp"
                  key={index}
                  className="relative m-4 h-16 w-56 "
                  delay={300 * index}
                >
                  <Image
                    src={t(`${brand}.image`)}
                    alt={`logo for ${t(`${brand}.name`)}`}
                    fill={true}
                    sizes="250px"
                    className="object-contain"
                  />
                </ScrollAnimation>
              )
          )}
        </div>

        <Link
          className="text-primary-dark secondary-font self-end mt-12 text-xl"
          href={t("link")}
        >
          <ScrollAnimation animateIn="fadeInUp" delay={brands.length * 300}>
            {t("linkText")}
          </ScrollAnimation>
        </Link>
      </div>
    </section>
  );
}
