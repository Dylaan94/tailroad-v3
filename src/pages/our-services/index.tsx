// components
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import OurBrands from "@/components/OurBrands";
import OurServicesBlock from "@/components/OurServicesBlock";
import PageHero from "@/components/PageHero";
import TextImageColumn from "@/components/TextImageColumn";
import Image from "next/image";

export default function page() {
  return (
    <main>
      <PageHero contentSelector="pageHeroContent" />
      <span className="relative flex w-full h-[300px]">
        <Image
          className="object-cover"
          alt="onomichiSuidou"
          fill={true}
          src="/images/birminghamStreet.png"
          sizes="100vw"
          quality={30}
        />
      </span>
      <Breadcrumbs />
      <TextImageColumn contentSelector="textImageColumnContent_1" />
      <OurServicesBlock contentSelector="ourServicesContent" />
      <OurBrands contentSelector="ourBrandsContent" />
      <CallToAction contentSelector="callToActionContent" />
    </main>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      messages: (await import(`./messages/${context.locale}.json`)).default,
    },
  };
}
