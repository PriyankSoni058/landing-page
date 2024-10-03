import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-[url('/images/banner.png')] bg-cover bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1000px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Vivamus pretium elit,
                  <br />
                  venenatis quam scelerisque non.
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  Fusce egestas fermentum elit ac sollicitudin. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center justify-center space-y-4">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-full bg-primary px-10 py-2 text-base text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Let&apos;s Start
                    <Image
                      src="/images/arrow.svg"
                      alt="logo"
                      width={20}
                      height={20}
                      className="text-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
