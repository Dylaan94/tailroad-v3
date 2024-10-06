// Components
import ScrollAnimation from "react-animate-on-scroll";
import TextImageStack from "./TextImageStack";
import { useTranslations } from "next-intl";

export default function OurWorkBlock({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);
  const caseStudies = ["caseStudy_1", "caseStudy_2"];

  return (
    <section className="ourWorkBlock flex justify-center text-primary-dark">
      <div className="w-11/12 max-w-screen-2xl flex flex-col pt-20 md:pt-44 ">
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="text-4xl secondary-font mb-12">{t("header")}</h2>
        </ScrollAnimation>
        {caseStudies &&
          caseStudies.map((caseStudy, index) => {
            return (
              <TextImageStack
                key={index}
                image={t(`${caseStudy}.image`) || ""}
                header={t(`${caseStudy}.header`) || ""}
                text_1={t(`${caseStudy}.text_1`) || ""}
                text_2={t(`${caseStudy}.text_2`) || ""}
                link={t(`${caseStudy}.link`) || ""}
                linkText={t(`${caseStudy}.linkText`) || ""}
                imageLeft={index % 2 === 0}
                delay={index + 1}
              />
            );
          })}
      </div>
    </section>
  );
}
