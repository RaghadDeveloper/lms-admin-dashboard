import { createSlice } from "@reduxjs/toolkit";
import {
  categoriesStatistics,
  coursesStatistics,
  earningsStatistics,
  studentsStatistics,
  teachersStatistics,
  usersStatistics,
} from "./statisticsThunk";

const initialState = {
  loading: false,
  error: null,
  courses: [],
  earnings: [],
  users: [],
  students: [],
  teachers: [],
  categories: [],
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

const statisticsSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: (builder) => {
    builder

      // coursesStatistics
      .addCase(coursesStatistics.pending, handlePending)
      .addCase(coursesStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
      })
      .addCase(coursesStatistics.rejected, handleRejected)

      // categoriesStatistics
      .addCase(categoriesStatistics.pending, handlePending)
      .addCase(categoriesStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(categoriesStatistics.rejected, handleRejected)

      // earningsStatistics
      .addCase(earningsStatistics.pending, handlePending)
      .addCase(earningsStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.earnings = action.payload.data;
      })
      .addCase(earningsStatistics.rejected, handleRejected)

      // usersStatistics
      .addCase(usersStatistics.pending, handlePending)
      .addCase(usersStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
      })
      .addCase(usersStatistics.rejected, handleRejected)

      // studentsStatistics
      .addCase(studentsStatistics.pending, handlePending)
      .addCase(studentsStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload.data;
      })
      .addCase(studentsStatistics.rejected, handleRejected)

      // teachersStatistics
      .addCase(teachersStatistics.pending, handlePending)
      .addCase(teachersStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload.data;
      })
      .addCase(teachersStatistics.rejected, handleRejected);
  },
});

export default statisticsSlice.reducer;
