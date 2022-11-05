import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils";
import trendJson from "../data/trend.json";

export const fetchAllTrend = createAsyncThunk("trends/fetchAllTrend", async () => {
  const data = await getData(trendJson);
  return data.report.daily;
});

const trends = createSlice({
  name: "trends",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAllTrend.pending.type]: (state) => {
      state.data = null;
      state.loading = true;
    },
    [fetchAllTrend.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export default trends;
