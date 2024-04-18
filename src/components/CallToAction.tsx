// components
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

export default function CallToAction({
  contentSelector,
  background = "bg-white",
}: {
  contentSelector: string;
  background?: string;
}) {
  const t = useTranslations(contentSelector);

  return (
    <section
      className={`callToAction ${background} w-full flex justify-center`}
    >
      <div className="callToAction-container max-w-screen-xl w-3/4 flex py-16">
        {/* Left */}
        <ScrollAnimation
          animateIn="fadeIn"
          className="callToAction-left flex items-center  w-2/3"
        >
          {/* Left Content box */}
          <span className="callToAction-left-content flex flex-col items-center w-11/12 bg-zinc-50 p-16 text-center text-primary-dark text-2xl primary-font">
            {/* text content */}
            <p className="mb-6">{t("par_1")}</p>
            <p>{t("par_2")}</p>

            <Image
              className="mt-12"
              src={"/images/logo.png"}
              alt={"logo"}
              width={50}
              height={50}
            />
          </span>
        </ScrollAnimation>

        {/* Right */}
        <ScrollAnimation
          animateIn="fadeIn"
          delay={500}
          className="callToAction-right w-1/3 border-l border-primary-dark "
        >
          {/* Form */}

          <form
            method="post"
            action="https://getform.io/f/5919e827-a971-48ed-ad98-147817e8de0d"
            className="contact-us-form flex flex-col pl-12 pt-12 text-2xl primary-font text-primary-dark"
          >
            <label className="flex flex-col pb-8">
              {t("form_name")}
              <input
                className="border border-primary-dark rounded-lg mt-4 py-2 px-1"
                type="text"
                name="name"
              />
            </label>
            <label className="flex flex-col pb-8">
              {t("form_email")}
              <input
                className="border mt-4 border-primary-dark rounded-lg py-2 px-1"
                type="email"
                name="email"
              />
            </label>
            <label className="flex flex-col pb-16">
              {t("form_message")}
              <input
                className="border mt-4 border-primary-dark rounded-lg py-2 px-1"
                type="text"
                name="message"
              />
            </label>
            <button
              className="border self-end rounded-lg w-fit  py-2 px-12 border-primary-dark"
              type="submit"
            >
              {t("form_button")}
            </button>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
