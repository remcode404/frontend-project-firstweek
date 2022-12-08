import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../Slice/bookingSlice'
import categoryReducer from '../Slice/categorySlice';
import productSlice from '../Slice/productSlice';

export const store = configureStore({
  reducer: {
    bookingReducer,
    categoryReducer,
    productSlice,
    
  },
});
