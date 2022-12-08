import { configureStore } from "@reduxjs/toolkit";
import registration from '../Slice/registrationSlice'

export const store = configureStore({
  reducer: {registration},
});
