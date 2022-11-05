import { configureStore } from "@reduxjs/toolkit";
import trends from "./trends";
import advertises from "./advertises";

const store = configureStore({
  reducer: {
    trends: trends.reducer,
    advertises: advertises.reducer,
  },
});

export default store;
