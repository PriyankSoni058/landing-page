import axios from "axios";
import { Testimonial } from "@/types/testimonial";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface TestimonialState {
  testimonials: Testimonial[];
  selectedTestimonial: Testimonial | null;
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialState = {
  testimonials: [],
  selectedTestimonial: null,
  loading: false,
  error: null,
};

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}`);
    return response.data.reviews;
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    selectTestimonial: (state, action: PayloadAction<number>) => {
      const selected = state.testimonials.find(
        (testimonial) => testimonial.id === action.payload
      );
      state.selectedTestimonial = selected || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch testimonials";
      });
  },
});

export const { selectTestimonial } = testimonialSlice.actions;

export default testimonialSlice.reducer;
