import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";

const store = configureStore({
  reducer: {
    adSlice: listSlice.reducer,
  },
});

export default store;
