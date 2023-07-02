import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    data: [],
  },
  reducers: {
    employeeDetails: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const employeeReducer = employeeSlice.reducer;

export const { emp } = employeeSlice.actions;
