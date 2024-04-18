import PricingComparison from "@/components/PricingComparison";
import ServicesHero from "@/components/ServicesHero";
import TextImageColumn from "@/components/TextImageColumn";
import CallToAction from "@/components/CallToAction";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function EcommerceDevelopment() {
  return (
    <main>
      <ServicesHero contentSelector="servicesHeroContent" />
      <Breadcrumbs />
      <TextImageColumn
        contentSelector="textImageColumnContent_1"
        imageOnLeft={true}
      />
      <PricingComparison contentSelector="pricingComparisonContent" />
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
