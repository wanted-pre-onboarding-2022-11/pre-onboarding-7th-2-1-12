import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adverTisementsReducer from "../features/advertisements/advertisementsSlice";
import filterStateReducer from "../features/advertisements/filterStateSlice";
import trendDataReducer from "../features/trend/trendDataSlice";

const RootReducer = combineReducers({
  adverTisementsReducer,
  filterStateReducer,
  trendDataReducer,
});
export const store = configureStore({
  reducer: RootReducer,
});
