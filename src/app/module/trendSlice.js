import { createSlice } from "@reduxjs/toolkit";
import { diffOfDate } from "utils/day";
import trendData from "data/trend-data.json";

const initialState = {
  date: [],
  category: {
    option1: { menu: "선택", status: null },
    option2: { menu: "선택", status: null },
  },
  select: {
    data: [],
    prevData: [],
  },
};

export const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {
    getSelectedData: (state, action) => {
      const allData = trendData.report.daily;
      const [start, end] = action.payload;

      state.date = [start, end];

      state.select.data = allData.filter(
        (item) => new Date(start) <= new Date(item.date) && new Date(item.date) <= new Date(end),
      );
      state.select.prevData = allData
        .filter((item) => new Date(item.date) < new Date(start))
        .slice(diffOfDate(start, end));
    },

    getCategory: (state, action) => {
      if (action.payload.optionNum === 1) {
        state.category.option1 = action.payload.item;
      } else {
        state.category.option2 = action.payload.item;
      }
    },
  },
});

export const { getSelectedData, getCategory } = trendSlice.actions;
export default trendSlice.reducer;
