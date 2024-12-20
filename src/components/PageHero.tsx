import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";
export default function PageHero({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section className="pageHero h-[90vh] bg-primary-dark flex-col flex items-center justify-center">
      <h1 className="text-3xl fadeIn fadeInDelay2  primary-font text-primary-green">
        {t("header")}
      </h1>
      <span className="pageHero-typewriter text-[60px] sm:text-[80px] md:text-[100px] tailroad-font text-white max-w-screen-xl w-11/12 text-center">
        <Typewriter
          options={{
            deleteSpeed: 25,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(t("tagline")).start();
          }}
        />
      </span>
    </section>
  );
}
