import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers, BalanceReducers, RedeemReducer } from "./Reducers";

const Store = configureStore({
  reducer: {
    Auth: AuthReducers,
    BalaceData: BalanceReducers,
    Redeem: RedeemReducer
  },
});

export default Store;
