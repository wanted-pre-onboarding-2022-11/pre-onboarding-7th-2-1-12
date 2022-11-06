import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import adService from "../../service/adService";

const FILTER_STATE_SLICLE_NAME = "filterStateSlice";

const initialState = { value: adService.getFilter() };

export const useFilterStateSelector = () => {
  return useSelector((state) => state.filterStateReducer);
};

export const filterStateSlice = createSlice({
  name: FILTER_STATE_SLICLE_NAME,
  initialState,
  reducers: {
    setState(state, { payload }) {
      state.value = payload;
      adService.setFilter(payload);
    },
  },
});

export const { setState } = filterStateSlice.actions;

export default filterStateSlice.reducer;
