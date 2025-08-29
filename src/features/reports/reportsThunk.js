import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllReportsApi,
  getReportDetailsApi,
  readAllReportsApi,
} from "./reportsApi";

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

export const getReportDetails = createAsyncThunk(
  "reports/getReportDetails",
  async (reportId, thunkAPI) => {
    try {
      const response = await getReportDetailsApi(reportId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const readAllReports = createAsyncThunk(
  "reports/readAllReports",
  async (_, thunkAPI) => {
    try {
      const response = await readAllReportsApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
