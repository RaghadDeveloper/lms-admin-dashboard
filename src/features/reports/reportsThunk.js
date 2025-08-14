import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllReportsApi } from "./reportsApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const getAllReports = createAsyncThunk(
  "reports/getAllReports",
  async (_, thunkAPI) => {
    try {
      const response = await getAllReportsApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
