import axiosInstance from "../../../../lms-instructor-portal/src/api/axiosInstance";

export const getAllReportsApi = () => axiosInstance.get("/reports");
