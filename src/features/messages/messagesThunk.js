import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMessageDetailsApi, getMessagesAPI } from "./messagesApi";

const extractError = (error) => {
  return (
    error?.response?.data || {
      message: "An unexpected error occurred. Please try again.",
    }
  );
};

export const getAllMessages = createAsyncThunk(
  "messages/getAllMessages",
  async (filters, thunkAPI) => {
    try {
      const response = await getMessagesAPI(filters);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);

export const getMessageDetails = createAsyncThunk(
  "messages/getMessageDetails",
  async (messageId, thunkAPI) => {
    try {
      const response = await getMessageDetailsApi(messageId);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractError(error));
    }
  }
);
