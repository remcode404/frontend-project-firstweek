import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../Slice/bookingSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    bookingReducer
  },
});
