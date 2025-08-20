import axiosInstance from "../../api/axiosInstance";

export const getCoursesApi = (filters) => {
  const params = new URLSearchParams(filters).toString();
  return axiosInstance.get(`/courses?${params}`);
};

export const searchCourseTitleApi = (search_key) =>
  axiosInstance.get(`/course/title/search?search_key=${search_key}`);

export const searchCoursesApi = (data) =>
  axiosInstance.post(`course/search`, data);

export const getCourseDetailsApi = (courseId) =>
  axiosInstance.get(`/course/details/${courseId}`);

export const reviewCourseApi = ({ courseId, data }) =>
  axiosInstance.post(`/course/review/${courseId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
