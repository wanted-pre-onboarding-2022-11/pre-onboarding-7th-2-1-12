import { createAsyncThunk } from "@reduxjs/toolkit";
import adService from "../../service/adService";

export const filter = createAsyncThunk("advertisements/filter/", async () => {
  try {
    const data = await adService.filter();
    return data;
  } catch (e) {
    console.error(e);
  }
});
