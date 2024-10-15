import {createSlice} from '@reduxjs/toolkit';
import {getProjectList} from '../ExtraReducers';

const initialState = {
  isLoading: false,
  list: [],
  error: null,
};

const Authentication = createSlice({
  name: 'ProjectAdd',
  initialState: initialState,
  reducers: {
    // onProjectAdd: (state, action) => {
    //   state.list = action.payload;
    // },
    onProjectDelete: (state, action) => {
      state.list = action.payload;
    },
    // onProjectEdit: (state, action) => {
    //   state.list = action.payload;
    // },
  },
  extraReducers: build => {
    build.addCase(getProjectList.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getProjectList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.list;
    });
    build.addCase(getProjectList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {onProjectAdd, onProjectDelete, onProjectEdit} =
  Authentication.actions;

export default Authentication.reducer;
