import axiosInstance from "../../api/axiosInstance";

export const coursesStatisticsApi = (year) =>
  axiosInstance.get(`/course/statistics?year=${year}`);

export const categoriesStatisticsApi = (year) =>
  axiosInstance.get(`/admin/category/statistics?year=${year}`);

export const earningsStatisticsApi = (year) =>
  axiosInstance.get(`/earning/statistics?year=${year}`);

export const usersStatisticsApi = (year) =>
  axiosInstance.get(`/admin/user/statistics?year=${year}`);

export const studentsStatisticsApi = (year) =>
  axiosInstance.get(`/admin/user/statistics?year=${year}&students=1`);

export const teachersStatisticsApi = (year) =>
  axiosInstance.get(`/admin/user/statistics?year=${year}&teachers=1`);
