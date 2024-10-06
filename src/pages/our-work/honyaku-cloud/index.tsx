import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import CaseStudyContent from "@/components/CaseStudyContent";
import OurBrands from "@/components/OurBrands";
import ServicesHero from "@/components/ServicesHero";

export default function HonyakuCloud() {
  return (
    <main>
      <ServicesHero contentSelector="servicesHeroContent" />
      <Breadcrumbs />
      <CaseStudyContent contentSelector="caseStudyContentContent" />
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
