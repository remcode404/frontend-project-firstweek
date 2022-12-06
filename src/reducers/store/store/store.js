import { configureStore } from "@reduxjs/toolkit";
import MainMenuSlice from "../Slices/MainMenuSlice";

export const store = configureStore({
reducer:  MainMenuSlice
})