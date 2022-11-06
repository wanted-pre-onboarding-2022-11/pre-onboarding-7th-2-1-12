import { createSlice } from "@reduxjs/toolkit";
import adListData from "data/ad-list-data.json";

const initialState = {
  select: { menu: "전체 광고", status: "all" },
  data: [],
};

export const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {
    getList: (state, action) => {
      if (action.payload.status === "all") {
        state.data = adListData.ads;
      } else {
        state.data = adListData.ads.filter((item) => item.status === action.payload.status);
      }
    },

    getSelect: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const { getList, getSelect } = managementSlice.actions;
export default managementSlice.reducer;
