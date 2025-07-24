import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  filterCoursesApi,
  getAllCoursesApi,
  searchCoursesApi,
} from "./coursesApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async (_, thunkAPI) => {
    try {
      const response = await getAllCoursesApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const filterCourses = createAsyncThunk(
  "courses/filterCourses",
  async (filters, thunkAPI) => {
    try {
      const response = await filterCoursesApi(filters);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
export const searchCourses = createAsyncThunk(
  "courses/searchCourses",
  async (data, thunkAPI) => {
    try {
      const response = await searchCoursesApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
