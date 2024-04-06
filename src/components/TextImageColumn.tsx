import { useTranslations } from "next-intl";
import Image from "next/image";

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

  return (
    <section className={`textColumns flex justify-center py-40 ${background}`}>
      <div
        className={`textColumns-container flex-col max-w-screen-xl w-11/12 flex ${
          imageOnLeft ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div
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
        </div>
        <div
          className={`textColumns-right w-full sm:w-1/2 pl-12 h-[400px] sm:h-full relative ${
            imageOnLeft ? "mr-16" : ""
          } `}
        >
          <Image
            className="object-cover"
            src={t("image")}
            alt={t("imageAlt")}
            fill={true}
            sizes="50vw, 100vw"
            quality={50}
          />
        </div>
      </div>
    </section>
  );
}
