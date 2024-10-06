import Bridge from "@/svgs/Bridge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

export default function TextImageColumn({
  contentSelector,
  imageOnLeft = false,
  background = "bg-secondary-green",
}: {
  contentSelector: string;
  imageOnLeft?: boolean;
  background?: string;
}) {
  const paragraphs = ["par_1", "par_2", "par_3"];

  const t = useTranslations(contentSelector);

  console.log(t("image"));

  return (
    <>
      <section
        className={`textImageColumns relative flex justify-center py-12 md:py-40 ${background}`}
      >
        <div
          className={`textColumns-container flex-col max-w-screen-xl w-11/12 flex ${
            imageOnLeft ? "sm:flex-row-reverse" : "sm:flex-row"
          }`}
        >
          <ScrollAnimation
            animateIn="fadeInUp"
            className={`textColumns-left w-full sm:w-1/2 ${
              imageOnLeft ? "" : "mr-16"
            }`}
          >
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="primary-font pb-8 text-primary-dark text-2xl"
              >
                {t(paragraph)}
              </p>
            ))}
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            delay={500}
            className={`textColumns-right w-full sm:w-1/2 pl-12 h-[400px] sm:h-full relative ${
              imageOnLeft ? "mr-16" : ""
            } `}
          >
            <ScrollAnimation
              animateIn="fadeIn"
              className="hidden absolute top-[-30px] right-0 md:flex"
            >
              <Bridge />
              <Bridge colour="#b2deca" />
              <Bridge colour="#f5a1a1" />
            </ScrollAnimation>

            <Image
              className="object-cover"
              src={t("image")}
              alt={t("imageAlt")}
              fill={true}
              sizes="50vw, 100vw"
              quality={50}
            />
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
