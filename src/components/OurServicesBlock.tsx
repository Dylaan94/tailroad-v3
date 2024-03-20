import { OurServicesBlockProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowSmall from "@/svgs/ArrowSmall";

export default function OurServicesBlock({
  header,
  services,
}: OurServicesBlockProps) {
  return (
    <section className="w-full relative bg-primary-dark flex justify-center">
      <div className="w-3/4 max-w-screen-xl flex flex-col py-44 ">
        <h2 className="text-3xl text-white mb-16">{header}</h2>

        <div className="grid grid-cols-2 gap-8 gap-y-20 md:grid-cols-4">
          {services.map((service, index) => (
            <ScrollAnimation
              animateIn="fadeInUp"
              key={index}
              className=" h-36 "
              delay={300 * index}
            >
              <Link
                className="text-white flex flex-col justify-between h-full"
                href={service.link}
              >
                <h3 className="text-xl w-3/4 b-6">{service.name}</h3>
                <ArrowSmall />
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <ScrollAnimation animateIn="fadeIn" className="absolute bottom-0 right-0">
        <Image
          src="/images/logoLarge.png"
          alt="logo"
          width={150}
          height={250}
        />
      </ScrollAnimation>
    </section>
  );
}
