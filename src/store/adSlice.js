import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils";
import db from "../db/wanted_FE_ad-list-data-set.json";

export const getAdList = createAsyncThunk("GET_ADLIST", async () => {
  const response = await getData(db);
  return response;
});

const initialState = {
  isLoading: true,
  value: null,
  error: null,
};
const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdList.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default adSlice;
