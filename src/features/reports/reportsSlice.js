import { createSlice } from "@reduxjs/toolkit";
import { getAllReports, getReportDetails } from "./reportsThunk";

const initialState = {
  loading: false,
  error: null,
  reports: [],
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

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  extraReducers: (builder) => {
    builder
      // getAllReports
      .addCase(getAllReports.pending, handlePending)
      .addCase(getAllReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload.data;
      })
      .addCase(getAllReports.rejected, handleRejected)

      // getReportDetails
      .addCase(getReportDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = state.reports.map((report) =>
          report.id === action.payload.data.id
            ? { ...report, status: "read" }
            : report
        );
      })
      .addCase(getReportDetails.rejected, handleRejected);
  },
});

export default reportsSlice.reducer;
