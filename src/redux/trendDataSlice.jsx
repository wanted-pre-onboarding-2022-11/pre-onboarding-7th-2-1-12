import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../utils";
import trendDataSet from "../assets/trendDataSet";

export const getList = createAsyncThunk("trendDataSlice/getList", async () => {
  const res = await getData(trendDataSet);

  return res.report.daily;
});

const handleFilterData = (state) => {
  let tempData = state.data.filter((e) => state.date.includes(e.date));

  tempData = tempData.reduce((acc, cur) => {
    if (acc[[state.orderBy[0]]]) {
      acc[[state.orderBy[0]]].push(cur[state.orderBy[0]]);
      if (state.orderBy[1]) {
        acc[[state.orderBy[1]]].push(cur[state.orderBy[1]]);
      }
    } else {
      acc[[state.orderBy[0]]] = [cur[state.orderBy[0]]];
      if (state.orderBy[1]) {
        acc[[state.orderBy[1]]] = [cur[state.orderBy[1]]];
      }
    }

    return { ...acc };
  }, {});

  const keys = Object.keys(tempData);

  return keys.map((e) => {
    return { label: e, data: tempData[e] };
  });
};

const trendDataSlice = createSlice({
  name: "trendData",
  initialState: {
    isLoading: true,
    date: [
      "2022-04-14",
      "2022-04-15",
      "2022-04-16",
      "2022-04-17",
      "2022-04-18",
      "2022-04-19",
      "2022-04-20",
    ],
    duration: "weeks",
    orderBy: ["roas"],
  },
  reducers: {
    getFilterData: (state, action) => {
      const { date, duration, orderBy } = action.payload;

      state.date = date || state.date;
      state.duration = duration || state.duration;
      state.orderBy = orderBy || state.orderBy;

      state.filterdData = handleFilterData(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.filterdData = handleFilterData(state);
      state.isLoading = false;
    });
  },
});

export default trendDataSlice;
export const { getFilterData } = trendDataSlice.actions;
