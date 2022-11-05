import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils";
import trendJson from "../data/trend.json";

export const fetchAllTrends = createAsyncThunk("trends/fetchAllTrends", async () => {
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
    [fetchAllTrends.pending.type]: (state) => {
      state.data = null;
      state.loading = true;
    },
    [fetchAllTrends.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export default trends;
