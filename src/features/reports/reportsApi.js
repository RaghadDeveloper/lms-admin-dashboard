import axiosInstance from "../../../../lms-instructor-portal/src/api/axiosInstance";

export const getAllReportsApi = () => axiosInstance.get("/reports");

export const getReportDetailsApi = (reportId) =>
  axiosInstance.get(`/reports/details?report_id=${reportId}`);
