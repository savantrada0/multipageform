import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const addEmployee = createAsyncThunk(
  "/employees/addemployee",
  async (data) => {
    const employee = await Api.post(`/api/employees/addemployee`, data);
    console.log(employee.data);
    return employee.data;
  }
);

export const getEmployees = createAsyncThunk(
  "/employees/getallemployees",
  async () => {
    const employees = await Api.get("/api/employees/getallemployees");
    return employees.data;
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.loading = true;
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.employees = payload;
    },
    [getEmployees.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [addEmployee.pending]: (state) => {
      state.loading = true;
    },
    [addEmployee.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [addEmployee.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const employeeReducer = employeeSlice.reducer;
