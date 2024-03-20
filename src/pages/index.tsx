import Hero from "../components/Hero";
import ColumnTextLink from "../components/ColumnTextLink";
import { useState } from "react";

import { columnTextLinkContent, ourBrandsContent } from "./content";
import OurBrands from "../components/OurBrands";
import TailroadLoading from "@/components/TailroadLoading";

export default function Home() {
  // state to check if the page is loading, show loading component for 3 seconds
  // then show the main content
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  if (isLoading) {
    return <TailroadLoading />;
  }

  return (
    <main>
      <Hero />
      <ColumnTextLink {...columnTextLinkContent} />
      <OurBrands {...ourBrandsContent} />
    </main>
  );
}
