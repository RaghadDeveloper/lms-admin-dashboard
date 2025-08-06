import axiosInstance from "../../api/axiosInstance";

export const getProfileApi = () => axiosInstance.get("/my-profile");
