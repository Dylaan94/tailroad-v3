// components
import Image from "next/image";

// utils
import { useTranslations } from "next-intl";

export default function FounderBanner({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section className="founderBanner bg-primary-dark w-full flex justify-center py-12">
      <div className="founderBanner-container w-11/12 flex">
        <div className="founderBanner-left w-1/2">
          <div className="founderBanner-left-content flex">
            <Image
              width="150"
              height="150"
              alt={t("imageAlt")}
              src={t("image")}
            />
            <span className="h-[150px] flex flex-col justify-center pl-8">
              <h3 className="text-white text-3xl primary-font">
                {t("header")}
              </h3>
              <h4 className="text-primary-green py-1 tailroad-font text-xl ">
                {t("title")}
              </h4>
              <p className="text-white primary-font text-lg">{t("email")}</p>
            </span>
          </div>
        </div>

        <div className="founderBanner-right w-1/2 flex items-center justify-end">
          <h2 className="text-6xl tailroad-font text-primary-green">
            {t("tagline")}
          </h2>
        </div>
      </div>
    </section>
  );
}
