"use client";

import { useEffect } from "react";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "@/components/SectionTitle";
import { AppDispatch, RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "@/lib/feature/testimonials/testimonialSlice";

const Testimonials = () => {
  const dispatch: AppDispatch = useDispatch();

  const { testimonials, loading, error }: = useSelector(
    (state: RootState) => state.testimonials
  );

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return (
    <section className="bg-bg-color-dark relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container lg:px-32 md:px-20 px-10">
        <SectionTitle title="What customers think about our product:" />

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error && (
          <div className="flex flex-wrap items-center mt-8">
            <div className="flex flex-row lg:flex-col overflow-x-scroll lg:overflow-y-scroll max-h-[500px] gap-8 py-5 lg:my-0 w-full px-4 lg:w-1/5">
              {testimonials.map((testimonial: Testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-4 border rounded shadow-lg"
                >
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.date}</p>
                  <p className="text-yellow-400">
                    Rating: {testimonial.rating}/5
                  </p>
                  <p className="text-gray-800">{testimonial.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
