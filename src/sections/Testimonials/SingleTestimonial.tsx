import Image from "next/image";
import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name } = testimonial;

  return (
    <div>
      <div className="flex relative mr-4 h-[50px] w-full max-w-[100px] min-w-[35px] lg:max-w-[50px] overflow-hidden rounded-full outline outline-offset-2 outline-2 outline-amber-300">
        <Image src="/images/testimonials/team-1.png" alt={name} fill />
      </div>
      <div className="w-full">
        <h3 className="mb-1 text-white text-sm lg:text-base xl:text-lg">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SingleTestimonial;
