import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="pt-8 md:pt-10 lg:pt-14">
      <div className="container lg:px-32 md:px-20 px-10">
        <div className="pb-8 md:pb-10 lg:pb-14">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Blandit turpis ut augue pulvinar rutrum."
                paragraph="Maecenas sit amet dui et purus imperdiet venenatis. Donec placerat arcu vulputate dictum blandit. Pellentesque tincidunt congue nunc, eget cursus mauris efficitur vel. Proin et nunc ultrices libero pharetra congue vitae sit amet odio. Fusce quis quam quis erat congue eleifend. Curabitur magna diam, interdum sed tincidunt et, finibus et ipsum. Cras justo mauris imperdiet vitae metus vel placerat nunc."
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about.png"
                  alt="about-image"
                  width={522}
                  height={696}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
