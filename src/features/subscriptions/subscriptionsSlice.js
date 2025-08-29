import { createSlice } from "@reduxjs/toolkit";
import { getSubscriptions } from "./subscriptionsThunk";

const initialState = {
  loading: false,
  error: null,
  subscriptions: [],
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

const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  extraReducers: (builder) => {
    builder
      // getAllsubscriptions
      .addCase(getSubscriptions.pending, handlePending)
      .addCase(getSubscriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = action.payload.data;
      })
      .addCase(getSubscriptions.rejected, handleRejected);
  },
});

export default subscriptionsSlice.reducer;
