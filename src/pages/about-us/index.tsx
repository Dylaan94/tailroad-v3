// components
import CallToAction from "@/components/CallToAction";
import FounderBanner from "@/components/FounderBanner";
import PageHero from "@/components/PageHero";
import TextImageColumn from "@/components/TextImageColumn";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="w-full">
      <PageHero contentSelector="pageHeroContent" />
      <span className="relative flex w-full h-[300px]">
        <Image
          className="object-cover"
          alt="onomichiSuidou"
          fill={true}
          sizes="100vw"
          quality={50}
          src="/images/onomichiSuidou.png"
        />
      </span>
      <FounderBanner contentSelector="founderBannerContent" />
      <TextImageColumn contentSelector="textImageColumnContent_1" />
      <TextImageColumn
        contentSelector="textImageColumnContent_2"
        imageOnLeft={true}
        background="bg-white"
      />
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
