import { createSlice } from "@reduxjs/toolkit";
import { getAllMessages, getMessageDetails } from "./messagesThunk";

const initialState = {
  loading: false,
  detailsLoading: false,
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
      .addCase(getAllMessages.rejected, handleRejected)

      // getMessageDetails
      .addCase(getMessageDetails.pending, (state) => {
        state.detailsLoading = true;
        state.error = null;
      })
      .addCase(getMessageDetails.fulfilled, (state, action) => {
        console.log(action);
        state.detailsLoading = false;
        const updatedMessage = action.payload.data;

        const index = state.messages.findIndex(
          (msg) => msg.id === updatedMessage.id
        );
        state.messages[index] = updatedMessage;
      })
      .addCase(getMessageDetails.rejected, handleRejected);
  },
});

export default messagesSlice.reducer;
