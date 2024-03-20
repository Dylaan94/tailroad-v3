import Image from "next/image";

export default function TailroadLoading() {
  return (
    <section className="tailroadLoading bg-primary-dark w-screen h-screen justify-center flex items-center">
      <Image
        className="fadeInOut"
        src="/images/logo.png"
        alt="logo"
        width={250}
        height={250}
      />
    </section>
  );
}
