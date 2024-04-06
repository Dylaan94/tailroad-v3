import { useTranslations } from "next-intl";

export default function PageHero({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section className="pageHero h-screen bg-primary-dark">
      <h1>{t("heroHeading")}</h1>
    </section>
  );
}
