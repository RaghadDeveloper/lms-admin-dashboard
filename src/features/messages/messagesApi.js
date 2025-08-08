import axiosInstance from "../../api/axiosInstance";

export const getMessagesAPI = () => axiosInstance.get("/contact-us/messages");
