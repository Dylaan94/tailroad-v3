// components
import PageHero from "@/components/PageHero";
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
