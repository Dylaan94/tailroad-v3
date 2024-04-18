import { useTranslations } from "next-intl";
import SimpleButtonLink from "./SimpleButtonLink";
import ScrollAnimation from "react-animate-on-scroll";
export default function PricingComparison({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);
  const cards = ["card_1", "card_2"];
  const cardParagraphs = ["par_1", "par_2"];

  return (
    <section className="pricingComparison flex justify-center py-24">
      <div className="pricingComparison-container text-primary-dark w-11/12 max-w-screen-xl flex flex-col items-center">
        <ScrollAnimation animateIn="fadeInUp" className="w-full">
          <h2 className="text-4xl w-full text-left secondary-font">
            {t("header")}
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={500}>
          <h3 className="text-4xl sm:text-5xl py-12 md:py-20 secondary-font text-center">
            {t("subHeader")}
          </h3>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInUp"
          delay={800}
          className="w-full sm:w-2/3 "
        >
          <p className="text-xl sm:text-2xl pb-4 text-center primary-font ">
            {t("par_1")}
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInUp"
          delay={1000}
          className="w-full sm:w-[60%] "
        >
          <p className="text-sm sm:text-base text-center text-secondary-dark primary-font">
            {t("par_2")}
          </p>
        </ScrollAnimation>

        <div className="pricingComparison-cards w-full xs:w-3/4 lg:w-2/3 gap-12 primary-font grid grid-cols-1 sm:grid-cols-2 justify-center py-16 ">
          {cards.map((card, index) => {
            return (
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={index * 300 + 1000}
                key={index}
                className="pricingComparison-card flex flex-col items-center border shadow-sm px-8 py-12 bg-zinc-50"
              >
                <h4 className="text-2xl secondary-font pb-6">
                  {t(`${card}.title`)}
                </h4>

                <p className="pb-8">
                  from{" "}
                  <span className="text-4xl primary-font">
                    {t(`${card}.price`)}
                  </span>{" "}
                </p>

                {/* Card Paragraphs */}
                {cardParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-center pb-4 text-secondary-dark"
                  >
                    {t(`${card}.${paragraph}`)}
                  </p>
                ))}

                <span className="block mt-auto">
                  <SimpleButtonLink
                    text="get started"
                    link="/contact-us"
                    internalLink={true}
                  />
                </span>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
