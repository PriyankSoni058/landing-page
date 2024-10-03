import Link from "next/link";
import Image from "next/image";
import productsData from "./productsData";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import SingleProduct from "./SingleProduct";
import SectionTitle from "../../components/SectionTitle";

const Products = () => {
  return (
    <>
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container lg:px-32 md:px-20 px-10">
          <SectionTitle
            title="Askitect AI"
            paragraph="Aenean tristique, tellus id posuere tincidunt, enim tortor scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam tincidunt nisl sed quam tempor."
          />

          <div className="my-4 flex items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="#"
              className="flex items-center justify-start gap-2 rounded-full bg-primary px-10 py-2 text-base text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Try Now
              <Image
                src="/images/arrow.svg"
                alt="logo"
                width={20}
                height={20}
                className="text-white"
              />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {productsData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="my-4 mt-10 text-2xl">
            You may need our services if you want to:
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
