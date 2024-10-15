import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers, BalanceReducers } from "./Reducers";

const Store = configureStore({
  reducer: {
    Auth: AuthReducers,
    BalaceData: BalanceReducers,
    // AddProject: AddProjectReducers,
  },
});

export default Store;
