import { useTranslations } from "next-intl";

export default function CaseStudyContent({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  const pills = ["pill_1", "pill_2", "pill_3", "pill_4"];

  return (
    <section className="caseStudyContent flex justify-center">
      {/* Container */}
      <div className="caseStudyContent-container w-11/12 grid-cols-1 max-w-screen-xl grid md:grid-cols-2 py-20 md:py-44 ">
        {/* Left Column */}

        <div className="caseStudyContent-left">
          <h2 className="text-3xl font-semibold">overview</h2>
          <h3 className="text-6xl py-12">{t("overviewHeader")}</h3>

          {/* Pills */}

          <div className=" flex flex-wrap gap-4 w-full md:w-1/2 mb-12 md:mb-0">
            {pills.map((pill, index) => (
              <div
                key={index}
                className="caseStudyContent-pill border border-slate-400 rounded-full w-fit"
              >
                <p className="text-slate-400 px-3 py-2">{t(`${pill}`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="caseStudyContent-right flex flex-col">
          <p className="text-2xl">{t("description")}</p>

          <h4 className="text-5xl py-12">the challenge</h4>

          <p className="pb-6">{t("theChallegeContent")}</p>

          <p>{t("theSolutionContent")}</p>
        </div>
      </div>
    </section>
  );
}
