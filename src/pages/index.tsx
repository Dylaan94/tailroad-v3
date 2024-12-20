import { useEffect, useState } from "react";

// components
import OurBrands from "../components/OurBrands";
import TailroadLoading from "@/components/TailroadLoading";
import OurServices from "@/components/OurServicesBlock";
import TextImage from "@/components/TextImage";
import OurWorkBlock from "@/components/OurWorkBlock";
import Hero from "../components/Hero";
import ColumnTextLink from "../components/ColumnTextLink";

// utils
import { useTranslations } from "next-intl";
import CallToAction from "@/components/CallToAction";
import OurServicesBlockAlt from "@/components/OurServicesBlockAlt";

export default function Home() {
  // state to check if the page is loading, show loading component for 3 seconds
  // then show the main content
  const [isLoading, setIsLoading] = useState(true);

  // translations
  const t = useTranslations();

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 4000);

  // useEffect(() => {
  //   // if user scrolls before the 3 seconds, close the loading component
  //   window.onscroll = () => {
  //     setIsLoading(false);
  //   };
  // }, []);

  // if (isLoading) {
  //   return <TailroadLoading />;
  // }

  return (
    <main>
      <Hero />
      <ColumnTextLink
        contentSelector="columnTextLinkContent"
        highlightTailroad={true}
      />
      <OurServicesBlockAlt contentSelector="ourServicesContent" />
      <OurBrands contentSelector="ourBrandsContent" />
      <TextImage contentSelector="textImageContent" />
      <OurWorkBlock contentSelector="ourWorkContent" />
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
