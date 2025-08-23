import axiosInstance from "../../api/axiosInstance";

export const getAllProfilesApi = (filters) => {
  const params = new URLSearchParams(filters).toString();
  return axiosInstance.get(`/profiles?${params}`);
};

export const banUserApi = (user_id) =>
  axiosInstance.post(`/user/ban/${user_id}`);
