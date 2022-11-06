import { configureStore } from "@reduxjs/toolkit";
import trendDataSlice from "./trendDataSlice";

const store = configureStore({
  reducer: {
    trendData: trendDataSlice.reducer,
  },
});
export default store;
