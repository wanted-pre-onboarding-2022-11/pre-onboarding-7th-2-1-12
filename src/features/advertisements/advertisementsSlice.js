import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { filter } from "./advertisementsThunk";
export const AD_SLICE_NAME = "advertisements";

export const useAdSelector = () => useSelector((state) => state.adverTisementsReducer);
export const useAdIdSelector = (id) =>
  useSelector((state) => state.adverTisementsReducer.data.filter((ad) => ad.id === id))[0];

const IDLE = "idle";
const PENDING = "pending";

const initialState = {
  data: [],
  loading: IDLE,
  error: null,
};

export const advertisementsSlice = createSlice({
  name: AD_SLICE_NAME,
  initialState,
  reducers: {
    setAds(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filter.pending, (state) => {
      if (state.loading === IDLE) {
        state.loading = PENDING;
      }
    });
    builder.addCase(filter.fulfilled, (state, { payload }) => {
      if (state.loading === PENDING) {
        state.loading = IDLE;
        state.data = payload;
      }
    });
    builder.addCase(filter.rejected, (state, action) => {
      if (state.loading === PENDING) state.loading = IDLE;
      state.error = action.error;
    });
  },
});

export const { setAds } = advertisementsSlice.actions;
export default advertisementsSlice.reducer;
