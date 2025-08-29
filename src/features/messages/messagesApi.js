import axiosInstance from "../../api/axiosInstance";

export const getMessagesAPI = (filters) => {
  const params = new URLSearchParams(filters).toString();
  return axiosInstance.get(`/contact-us/messages?${params}`);
};

export const getMessageDetailsApi = (messageId) =>
  axiosInstance.get(`/contact-us/messages/details?message_id=${messageId}`);
