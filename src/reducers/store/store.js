
import bookingReducer from '../Slice/bookingSlice'
import registration from '../Slice/registrationSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    bookingReducer,
    registration
  },
});
