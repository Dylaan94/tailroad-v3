// components
import FounderBanner from "@/components/FounderBanner";
import PageHero from "@/components/PageHero";
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
          src="/images/onomichiSuidou.png"
        />
      </span>
      <FounderBanner contentSelector="founderBannerContent" />
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
