import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMessagesAPI } from "./messagesApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const getAllMessages = createAsyncThunk(
  "messages/getAllMessages",
  async (_, thunkAPI) => {
    try {
      const response = await getMessagesAPI();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
