import { configureStore } from "@reduxjs/toolkit";
import trends from "./trends";

const store = configureStore({
  reducer: {
    trends: trends.reducer,
  },
});

export default store;
