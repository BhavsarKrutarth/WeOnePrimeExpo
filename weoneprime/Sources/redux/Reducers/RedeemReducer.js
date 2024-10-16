import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RedeemData: {},
};

const RedeemReducer = createSlice({
  name: 'Redeem',
  initialState,
  reducers: {
    SET_REDEEMDATA: (state, action) => {
      state.RedeemData = action.payload;
    },
  }
});

export const { SET_REDEEMDATA  } = RedeemReducer.actions;

export default RedeemReducer.reducer;
