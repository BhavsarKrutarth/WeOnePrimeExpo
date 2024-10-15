import { createAsyncThunk } from "@reduxjs/toolkit";
import FetchMethod from "../../api/FetchMethod";

export const getBalanceData = createAsyncThunk("fetchProject", async (id) => {
  try {
    const response = await FetchMethod.GET({
      EndPoint: `Membership`,
    });
    console.log("Project -> ", response);
    if (response) {
      return {
        balanceData: response,
      };
    }
  } catch (error) {
    console.log("Project error -> ", error);
    return {
      balanceData: {},
    };
  }
});
