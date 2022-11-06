import { configureStore } from "@reduxjs/toolkit";
import trend from "app/module/trendSlice";
import management from "app/module/managementSlice";

export const store = configureStore({
  reducer: {
    trend,
    management,
  },
});
