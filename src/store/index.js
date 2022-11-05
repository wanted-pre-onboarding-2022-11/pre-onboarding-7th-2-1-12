import { configureStore } from "@reduxjs/toolkit";
import adSlice from "./adSlice";

const store = configureStore({
  reducer: {
    adSlice: adSlice.reducer,
  },
});

export default store;
