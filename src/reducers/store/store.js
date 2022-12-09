
import bookingReducer from '../Slice/bookingSlice'
import registration from '../Slice/registrationSlice'
import reducerCategory from '../Slice/categorySlice';
import reducerProduct from '../Slice/productSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    bookingReducer,
    reducerCategory,
    reducerProduct,
    registration
  },
});
