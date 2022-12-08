import { configureStore } from '@reduxjs/toolkit';
import registration from '../Slice/registrationSlice'
import reducerCategory from '../Slice/categorySlice';
import reducerProduct from '../Slice/productSlice';
import bookingReducer from '../Slice/bookingSlice'

export const store = configureStore({
  reducer: {
    bookingReducer,
    reducerCategory,
    reducerProduct,
    registration
  },
});
