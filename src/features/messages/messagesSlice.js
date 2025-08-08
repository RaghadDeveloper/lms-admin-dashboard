import { createSlice } from "@reduxjs/toolkit";
import { getAllMessages } from "./messagesThunk";

const initialState = {
  loading: false,
  error: null,
  messages: [],
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  const message = action.payload?.message;

  if (typeof message === "string") {
    state.error = message;
  } else if (typeof message === "object" && message !== null) {
    const messages = Object.values(message).flat().join(" ");
    state.error = messages || "Something went wrong";
  } else {
    state.error = "Something went wrong";
  }
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: (builder) => {
    builder
      // getAllMessages
      .addCase(getAllMessages.pending, handlePending)
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload.data;
      })
      .addCase(getAllMessages.rejected, handleRejected);
  },
});

export default messagesSlice.reducer;
