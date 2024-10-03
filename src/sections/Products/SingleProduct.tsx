import { Product } from "@/types/product";

const SingleProduct = ({ product }: { product: Product }) => {
  const { title, paragraph } = product;
  
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-sm font-medium leading-relaxed text-white">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
