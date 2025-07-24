import { createSlice } from "@reduxjs/toolkit";
import {
  filterCourses,
  getAllCourses,
  getCourseDetails,
  searchCourses,
} from "./coursesThunk";

const initialState = {
  loading: false,
  error: null,
  courses: [],
  course: null,
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

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearCourseError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getAllCourses
      .addCase(getAllCourses.pending, handlePending)
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
      })
      .addCase(getAllCourses.rejected, handleRejected)

      // filterCourses
      .addCase(filterCourses.pending, handlePending)
      .addCase(filterCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
      })
      .addCase(filterCourses.rejected, handleRejected)

      // searchCourses
      .addCase(searchCourses.pending, handlePending)
      .addCase(searchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
      })
      .addCase(searchCourses.rejected, handleRejected)

      // getCourseDetails
      .addCase(getCourseDetails.pending, handlePending)
      .addCase(getCourseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload.data;
      })
      .addCase(getCourseDetails.rejected, handleRejected);
  },
});

export const { clearCourseError } = courseSlice.actions;
export default courseSlice.reducer;
