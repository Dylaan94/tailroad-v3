import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <>
      <section className="hero w-screen h-screen relative bg-zinc-950 flex  ">
        <div className=" w-1/2 2xl:w-[51%] h-full relative fadeInDelay5">
          {/* <Image with clip path */}
          <Image
            src="/images/bridge.png"
            fill={true}
            sizes="100vw"
            alt="bridge"
            className="[clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)] opacity-60 object-cover"
          />
        </div>

        {/* Header */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className=" text-[100px] md:text-[150px] lg:text-[200px] 2xl:text-[300px] tailroad-font ">
            <Typewriter
              options={{
                cursor: "",
                deleteSpeed: 25,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span style="color: #fff"> hey, </span>`)
                  .pauseFor(100)
                  .deleteChars(5)
                  .typeString(`<span style="color: #5BC5B7">ようこそ</span>`)
                  .pauseFor(200)
                  .deleteChars(5)
                  .typeString(
                    `<span style="color: #fff ">tail</span><span style="color: #5BC5B7" >road</span>`
                  )
                  .start();
              }}
            />
          </h1>
        </div>

        {/* Scroll down */}
        <div className=" w-full flex justify-center absolute bottom-0 fadeInDelay5 jump">
          <div className="w-[95%] flex justify-end h-16 items-center">
            <button className="text-white">scroll down</button>
          </div>
        </div>
      </section>
    </>
  );
}
