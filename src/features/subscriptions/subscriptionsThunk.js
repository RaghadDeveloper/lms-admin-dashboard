import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSubscriptionsApi } from "./subscriptionsApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const getSubscriptions = createAsyncThunk(
  "subscriptions/getAllSubscription",
  async (date, thunkAPI) => {
    try {
      const response = await getSubscriptionsApi(date);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
