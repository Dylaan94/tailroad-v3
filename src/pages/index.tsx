import Hero from "../components/Hero";
import ColumnTextLink from "../components/ColumnTextLink";
import { useEffect, useState } from "react";

import {
  columnTextLinkContent,
  ourBrandsContent,
  ourServicesContent,
} from "./content";
import OurBrands from "../components/OurBrands";
import TailroadLoading from "@/components/TailroadLoading";
import OurServices from "@/components/OurServicesBlock";

export default function Home() {
  // state to check if the page is loading, show loading component for 3 seconds
  // then show the main content
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  useEffect(() => {
    // if user scrolls before the 3 seconds, close the loading component
    window.onscroll = () => {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <TailroadLoading />;
  }

  return (
    <main>
      <Hero />
      <ColumnTextLink {...columnTextLinkContent} />
      <OurBrands {...ourBrandsContent} />
      <OurServices {...ourServicesContent} />
      
    </main>
  );
}
