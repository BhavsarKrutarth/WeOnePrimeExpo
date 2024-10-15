import { createSlice } from "@reduxjs/toolkit";
import { getBalanceData } from "../ExtraReducers";

const initialState = {
  balanceData: {},
};

const BalanceData = createSlice({
  name: "Balance",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getBalanceData.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getBalanceData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.balanceData = action.payload.balanceData;
    });
    build.addCase(getBalanceData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = BalanceData.actions;

export default BalanceData.reducer;
