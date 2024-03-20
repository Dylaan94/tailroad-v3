import { OurBrandsProps } from "../types";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

export default function OurBrands({
  header,
  brands,
  link,
  linkText,
}: OurBrandsProps) {
  return (
    <section className="bg-secondary-green py-24 flex justify-center">
      <div className="w-11/12 max-w-screen-2xl flex flex-col items-center">
        <ScrollAnimation animateIn="fadeInUp">
          <h3 className="text-3xl text-center mb-12">{header}</h3>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center">
          {brands.map((brand, index) => (
            <ScrollAnimation
              animateIn="fadeInUp"
              key={index}
              className="relative m-4 h-16 w-56 "
              delay={300 * index}
            >
              <Image
                src={brand.image}
                alt={`logo for ${brand.name}`}
                fill={true}
                objectFit="contain"
              />
            </ScrollAnimation>
          ))}
        </div>

        <Link className="text-primary-dark self-end mt-6" href={link}>
          <ScrollAnimation animateIn="fadeInUp">{linkText}</ScrollAnimation>
        </Link>
      </div>
    </section>
  );
}
