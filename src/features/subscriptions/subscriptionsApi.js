import axiosInstance from "../../api/axiosInstance";

export const getSubscriptionsApi = (date) =>
  axiosInstance.get(`admin/subscription/statistics?date=${date}`);
