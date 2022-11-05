import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils";
import advertiseJson from "../data/advertises.json";

export const fetchAllAdvertise = createAsyncThunk("advertises/advertiseJson", async () => {
  const data = await getData(advertiseJson);
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
