import axiosInstance from "../../api/axiosInstance";

export const getAllLessonsApi = (courseId) =>
  axiosInstance.get(`/courses/${courseId}/lessons`);

export const getLessonDetailsApi = (lessonId) =>
  axiosInstance.get(`/lesson/details/${lessonId}`);

export const getLessonCommentsApi = (lessonId) =>
  axiosInstance.get(
    `/all-comments?commentable_id=${lessonId}&commentable_type=lesson`
  );
