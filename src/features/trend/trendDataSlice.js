import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../utils";
import trendDataSet from "../../data/trend-data-set.json";
import { getPrevDatesStartToLast } from "../../utils/convDate";

export const getList = createAsyncThunk("trendDataSlice/getList", async () => {
  const res = await getData(trendDataSet);
  return res.report.daily;
});

const handleTempData = (data, date) => {
  let tempData = data.filter((e) => date.includes(e.date));

  return tempData;
};

const handleChartData = (data, date, orderBy) => {
  let tempData = handleTempData(data, date);

  tempData = tempData.reduce((acc, cur) => {
    if (acc[[orderBy[0]]]) {
      acc[[orderBy[0]]].push(cur[orderBy[0]]);
      if (orderBy[1]) {
        acc[[orderBy[1]]].push(cur[orderBy[1]]);
      }
    } else {
      acc[[orderBy[0]]] = [cur[orderBy[0]]];
      if (orderBy[1]) {
        acc[[orderBy[1]]] = [cur[orderBy[1]]];
      }
    }

    return { ...acc };
  }, {});

  const keys = Object.keys(tempData);

  return keys.map((e) => {
    return { label: e, data: tempData[e] };
  });
};

const handleInfoData = (data, date) => {
  let tempData = handleTempData(data, date);
  tempData = tempData.reduce(
    (acc, cur) => {
      const result = {
        imp: acc.imp + cur.imp,
        click: acc.click + cur.click,
        cost: acc.cost + cur.cost,
        conv: acc.conv + cur.conv,
        convValue: acc.convValue + cur.convValue,
        roas: acc.roas + cur.roas,
      };

      return result;
    },
    { imp: 0, click: 0, cost: 0, conv: 0, convValue: 0, roas: 0 },
  );
  tempData.roas = Math.round(tempData.roas / date.length);

  return tempData;
};

const handlePrevInfoData = (currentInfoData, prevInfoData) => {
  return {
    imp: currentInfoData.imp - prevInfoData.imp,
    click: currentInfoData.click - prevInfoData.click,
    cost: currentInfoData.cost - prevInfoData.cost,
    conv: currentInfoData.conv - prevInfoData.conv,
    convValue: currentInfoData.convValue - prevInfoData.convValue,
    roas: currentInfoData.roas - prevInfoData.roas,
  };
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
      const prevDate = getPrevDatesStartToLast(new Date(state.date[0]), state.date.length);

      state.date = date || state.date;
      state.duration = duration || state.duration;
      state.orderBy = orderBy || state.orderBy;

      const infoData = handleInfoData(state.data, state.date);
      const prevInfoData = handleInfoData(state.data, prevDate);

      state.infoData = infoData;
      state.prevInfoData = handlePrevInfoData(infoData, prevInfoData);
      state.chartData = handleChartData(state.data, state.date, state.orderBy);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      console.log("here");
      state.data = action.payload;
      const prevDate = getPrevDatesStartToLast(new Date(state.date[0]), state.date.length);

      const infoData = handleInfoData(state.data, state.date);
      const prevInfoData = handleInfoData(state.data, prevDate);

      state.infoData = infoData;
      state.prevInfoData = handlePrevInfoData(infoData, prevInfoData);

      state.chartData = handleChartData(state.data, state.date, state.orderBy);

      state.isLoading = false;
    });
  },
});

export default trendDataSlice.reducer;
export const { getFilterData } = trendDataSlice.actions;
