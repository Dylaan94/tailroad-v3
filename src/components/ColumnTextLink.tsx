import { useTranslations } from "next-intl";
import SimpleButtonLink from "./SimpleButtonLink";
import ScrollAnimation from "react-animate-on-scroll";
import formatTailroad from "@/utils/formatTailroad";

export default function ColumnTextLink({
  contentSelector,
  highlightTailroad = false,
}: {
  contentSelector: string;
  highlightTailroad?: boolean;
}) {
  const t = useTranslations(contentSelector);

  // structure of subText arr
  const subText = ["subText_1", "subText_2"];

  // format mainText if highlightTailroad is true
  let mainText = "";

  highlightTailroad
    ? (mainText = formatTailroad(t("mainText")))
    : (mainText = t("mainText"));

  return (
    <section className="w-full justify-center flex kaisei-decol ">
      <div className="w-3/4 max-w-screen-xl flex justify-between py-44 ">
        {/* Left Column */}
        <ScrollAnimation animateIn="fadeInUp" className="w-1/3">
          <h2 className="text-4xl secondary-font ">
            <span
              dangerouslySetInnerHTML={{
                __html: mainText,
              }}
            />
          </h2>
        </ScrollAnimation>

        {/* Right Column */}
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={500}
          className="w-1/2 flex flex-col primary-font"
        >
          {subText.map((text, index) => (
            <p key={index} className="text-2xl  pb-4">
              {t(text)}
            </p>
          ))}

          <SimpleButtonLink
            internalLink={true}
            text={t("linkText")}
            link={t("linkUrl")}
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
