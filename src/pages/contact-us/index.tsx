import CallToAction from "@/components/CallToAction";
import OurBrands from "@/components/OurBrands";
import ServicesHero from "@/components/ServicesHero";

export default function ContactUs() {
  return (
    <main>
      <ServicesHero contentSelector="servicesHeroContent" />
      <CallToAction contentSelector="callToActionContent" />
      <OurBrands contentSelector="ourBrandsContent" />
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
