import axiosInstance from "../../api/axiosInstance";

export const getAllCoursesApi = () => axiosInstance.get("/courses");

export const filterCoursesApi = (filters) => {
  const params = new URLSearchParams(filters).toString();
  return axiosInstance.get(`/courses?${params}`);
};

export const searchCoursesApi = (data) =>
  axiosInstance.post(`course/search`, data);

export const getCourseDetailsApi = (courseId) =>
  axiosInstance.get(`/course/details/${courseId}`);
