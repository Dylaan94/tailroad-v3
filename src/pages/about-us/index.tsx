import PageHero from "@/components/PageHero";

export default function AboutUs() {
  return (
    <main className="">
      <PageHero contentSelector="aboutUsHero" />
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
