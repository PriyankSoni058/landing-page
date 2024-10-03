"use client";

import { useEffect } from "react";
import SingleTestimonial from "./SingleTestimonial";
import { AppDispatch, RootState } from "@/lib/store";
import {
  fetchTestimonials,
  selectTestimonial,
} from "@/lib/feature/testimonials/testimonialSlice";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { Testimonial } from "@/types/testimonial";

const Testimonials = () => {
  const dispatch: AppDispatch = useDispatch();

  const { testimonials, selectedTestimonial } = useSelector(
    (state: RootState) => state.testimonials
  );

  useEffect(() => {
    dispatch(fetchTestimonials()).then((action: any) => {
      if (action.payload && action.payload.length > 0) {
        dispatch(selectTestimonial(action.payload[0].id));
      }
    });
  }, [dispatch]);

  const handleTestimonialClick = (id: number) => {
    dispatch(selectTestimonial(id));
  };

  return (
    <section className="bg-bg-color-dark relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container lg:px-32 md:px-20 px-10">
        <SectionTitle title="What customers think about our product:" />

        <div className="flex flex-wrap items-center mt-8">
          <div className="flex flex-row lg:flex-col overflow-x-scroll lg:overflow-y-scroll max-h-[500px] gap-8 py-5 lg:my-0 w-full px-4 lg:w-1/5">
            {testimonials.map((testimonial: Testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => handleTestimonialClick(testimonial.id)}
              >
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="w-full px-4 lg:px-10 lg:w-4/5 text-lg lg:text-3xl">
            {selectedTestimonial ? (
              <div>
                <p>
                  <strong>{selectedTestimonial.name}</strong> says: <br />"
                  {selectedTestimonial.comment}"
                </p>
                <p className="text-lg">
                  Rating: {selectedTestimonial.rating}/5
                </p>
                <p className="text-lg">Date: {selectedTestimonial.date}</p>
              </div>
            ) : (
              <p>Click on a testimonial to see the details.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
