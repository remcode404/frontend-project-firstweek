import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Slice/categorySlice";
import productSlice from "../Slice/productSlice";

export const store = configureStore({
  reducer: {
    reducerCategory:  categorySlice,
    reducerProduct: productSlice,
  },
});
