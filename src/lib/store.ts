import { configureStore } from "@reduxjs/toolkit";
import testimonialReducer from "../lib/feature/testimonials/testimonialSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      testimonials: testimonialReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
