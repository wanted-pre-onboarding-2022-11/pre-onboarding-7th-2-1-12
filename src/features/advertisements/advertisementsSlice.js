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
    editById(state, { payload: { targetId, submitValues } }) {
      const editedData = state.data.map((state) => {
        if (state.id === targetId) {
          const { status, startDate, budget, roas, convValue, cost } = submitValues;
          return { ...state, status, startDate, budget, report: { roas, convValue, cost } };
        }
        return state;
      });
      state.data = editedData;
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

export const { setAds, editById } = advertisementsSlice.actions;
export default advertisementsSlice.reducer;
