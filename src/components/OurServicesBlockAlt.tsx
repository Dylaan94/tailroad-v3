// utils
import { useTranslations } from "next-intl";
import { useState } from "react";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function OurServicesBlockAlt({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const t = useTranslations(contentSelector);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // structure of services arr
  const services: {
    name: string;
    colour: string;
    delay?: number;
  }[] = [
    { name: "service_1", colour: "bg-light-blue", delay: 0 },
    { name: "service_2", colour: "bg-medium-green", delay: 300 },
    { name: "service_3", colour: "bg-salmon", delay: 600 },
    { name: "service_4", colour: "bg-light-purple", delay: 900 },
    { name: "service_5", colour: "bg-medium-green", delay: 1200 },
    { name: "service_6", colour: "bg-light-red", delay: 1200 },
    // { name: "service_7", colour: "bg-light-blue", delay: 1200 },
    // { name: "service_8", colour: "bg-medium-green", delay: 1200 },
  ];

  return (
    <section className="w-full pb-20 md:pb-44 ">
      <Swiper
        spaceBetween={50}
        slidesPerView={3.3}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4.3,
            spaceBetween: 30,
          },
        }}
        slidesOffsetBefore={48}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ScrollAnimation
              animateIn="fadeIn"
              delay={service.delay}
              className="h-[500px] flex items-end w-full"
            >
              <Link
                href={t(`${service.name}.link`)}
                className={` ${service.colour} w-full hover:h-[500px] height-ease flex flex-col justify-between h-[450px]  p-16 2xl:p-16 rounded-[3rem] `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-primary-dark text-3xl xl:text-4xl 2xl:text-4xl primary-font-base">
                  {t(`${service.name}.name`)}
                </h3>

                {hoveredIndex === index && (
                  <p className="self-end text-2xl primary-font fadeIn">
                    learn more
                  </p>
                )}
              </Link>
            </ScrollAnimation>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
