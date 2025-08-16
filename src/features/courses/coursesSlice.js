import { createSlice } from "@reduxjs/toolkit";
import {
  filterCourses,
  getAllCourses,
  getCourseDetails,
  reviewCourse,
  searchCourses,
  searchCourseTitle,
} from "./coursesThunk";

const initialState = {
  loading: false,
  error: null,
  courses: [],
  course: null,
  titles: [],
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
    clearTitles: (state) => {
      state.titles = [];
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

      // searchCoursesTitle
      .addCase(searchCourseTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.titles = action.payload.data;
      })
      .addCase(searchCourseTitle.rejected, handleRejected)

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
      .addCase(getCourseDetails.rejected, handleRejected)

      // reviewCourse
      .addCase(reviewCourse.pending, handlePending)
      .addCase(reviewCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.map((course) =>
          course.id === action.payload.data.id
            ? {
                ...course,
                approval_status: action.payload.data.approval_status,
              }
            : course
        );
        state.course = action.payload.data;
      })
      .addCase(reviewCourse.rejected, handleRejected);
  },
});

export const { clearCourseError, clearTitles } = courseSlice.actions;
export default courseSlice.reducer;
