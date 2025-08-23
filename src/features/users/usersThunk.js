import { createAsyncThunk } from "@reduxjs/toolkit";
import { banUserApi, getAllProfilesApi } from "./usersApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const getAllProfiles = createAsyncThunk(
  "users/getAllProfiles",
  async (filters, thunkAPI) => {
    try {
      const response = await getAllProfilesApi(filters);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const banUser = createAsyncThunk(
  "users/banUser",
  async (user_id, thunkAPI) => {
    try {
      const response = await banUserApi(user_id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
