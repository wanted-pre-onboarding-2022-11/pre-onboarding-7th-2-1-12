import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../utils";
import trendDataSet from "../../data/trend-data-set.json";

export const getList = createAsyncThunk("trendDataSlice/getList", async () => {
  const res = await getData(trendDataSet);
  return res.report.daily;
});
