import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./profileThunks";

const initialState = {
  loading: false,
  error: null,
  profile: null,
  categories: null,
  followers: null,
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

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder

      // getProfile
      .addCase(getProfile.pending, handlePending)
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.profile = action.payload.profile;
      })
      .addCase(getProfile.rejected, handleRejected);
  },
});

export default profileSlice.reducer;
