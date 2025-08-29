import { createSlice } from "@reduxjs/toolkit";
import { banUser, getAllProfiles } from "./usersThunk";

const initialState = {
  loading: false,
  banLoading: false,
  error: null,
  profiles: [],
  pagination: {
    currentPage: 1,
    prev: null,
    next: null,
    pages: [],
  },
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

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder

      // getAllProfile
      .addCase(getAllProfiles.pending, handlePending)
      .addCase(getAllProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.profiles = action.payload.data?.users;
        state.pagination = {
          currentPage: action.payload.data?.pagination.current_page,
          prev: action.payload.data?.pagination.prev_page,
          next: action.payload.data?.pagination.next_page,
          pages: action.payload.data?.pagination.pages,
        };
      })
      .addCase(getAllProfiles.rejected, handleRejected)

      // banUser
      .addCase(banUser.pending, (state) => {
        state.banLoading = true;
        state.error = null;
      })
      .addCase(banUser.fulfilled, (state, action) => {
        state.banLoading = false;
        state.error = null;
        state.profiles = state.profiles.map((profile) =>
          profile.user_id === action.meta.arg
            ? { ...profile, isBanned: !profile.isBanned }
            : { ...profile }
        );
      })
      .addCase(banUser.rejected, handleRejected);
  },
});

export default usersSlice.reducer;
