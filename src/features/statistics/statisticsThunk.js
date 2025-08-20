import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  categoriesStatisticsApi,
  coursesStatisticsApi,
  earningsStatisticsApi,
  studentsStatisticsApi,
  teachersStatisticsApi,
  usersStatisticsApi,
} from "./statisticsApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const coursesStatistics = createAsyncThunk(
  "statistics/courses",
  async (year, thunkAPI) => {
    try {
      const response = await coursesStatisticsApi(year);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const categoriesStatistics = createAsyncThunk(
  "statistics/categories",
  async (year, thunkAPI) => {
    try {
      const response = await categoriesStatisticsApi(year);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const earningsStatistics = createAsyncThunk(
  "statistics/earnings",
  async (year, thunkAPI) => {
    try {
      const response = await earningsStatisticsApi(year);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const usersStatistics = createAsyncThunk(
  "statistics/users",
  async (year, thunkAPI) => {
    try {
      const response = await usersStatisticsApi(year);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const studentsStatistics = createAsyncThunk(
  "statistics/students",
  async (year, thunkAPI) => {
    try {
      const response = await studentsStatisticsApi(year);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const teachersStatistics = createAsyncThunk(
  "statistics/teachers",
  async (year, thunkAPI) => {
    try {
      const response = await teachersStatisticsApi(year);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
