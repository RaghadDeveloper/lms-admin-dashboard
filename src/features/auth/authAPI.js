import axiosInstance from "../../api/axiosInstance";

export const loginAPI = (data) => axiosInstance.post("/admin/login", data);

export const verificationAPI = (data) =>
  axiosInstance.post("/email/verification", data);

export const resendOTPAPI = () => axiosInstance.get("/resend/verificationCode");

export const forgotPasswordAPI = (data) =>
  axiosInstance.post("/forgetPassword", data);

export const resetPasswordAPI = (data) =>
  axiosInstance.post("/reset/password", data);

export const logoutAPI = () => axiosInstance.get("/logout");
