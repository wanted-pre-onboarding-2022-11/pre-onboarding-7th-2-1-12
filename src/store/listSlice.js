import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils";
import adDb from "../db/wanted_FE_ad-list-data-set.json";
import dashboardDb from "../db/wanted_FE_trend-data-set.json";

export const getList = createAsyncThunk("GET_ADLIST", async (isAd) => {
  const response = await getData(isAd ? adDb : dashboardDb);
  return response;
});

const initialState = {
  isLoading: true,
  value: null,
  error: null,
};
const listSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default listSlice;
