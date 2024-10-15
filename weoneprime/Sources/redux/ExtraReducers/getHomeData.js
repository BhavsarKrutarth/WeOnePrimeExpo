import { createAsyncThunk } from "@reduxjs/toolkit";
import FetchMethod from "../../api/FetchMethod";

export const getHomeData = createAsyncThunk("fetchProject", async (id) => {
  //   try {
  //     const response = await FetchMethod.GET({
  //       EndPoint: `Project?LoginId=${id}`,
  //     });
  //     // console.log('Project -> ', response);
  //     if (response) {
  //       return {
  //         list: response.projectList,
  //         error: null,
  //       };
  //     }
  //   } catch (error) {
  //     console.log("Project error -> ", error);
  //     return {
  //       list: [],
  //       error: error,
  //     };
  //   }
});
