import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils";
import { advertises as advertiseData } from "../data";

export const fetchAllAdvertise = createAsyncThunk("advertises/advertiseJson", async () => {
  const data = await getData(advertiseData);
  return data;
});

const advertises = createSlice({
  name: "advertises",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAllAdvertise.pending.type]: (state) => {
      state.data = null;
      state.loading = true;
    },
    [fetchAllAdvertise.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export default advertises;
