import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import coursesReducer from "../features/courses/coursesSlice";
import lessonsReducer from "../features/lessons/lessonsSlice";
import lessonFilesReducer from "../features/lessonsFiles/lessonsFilesSlice";
import profileReducer from "../features/profile/profileSlice";
import messagesReducer from "../features/messages/messagesSlice";
import reportsReducer from "../features/reports/reportsSlice";
import statisticsReducer from "../features/statistics/statisticsSlice";
import usersReducer from "../features/users/usersSlice";
import quizReducer from "../features/quiz/quizSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    courses: coursesReducer,
    lessons: lessonsReducer,
    lessonFiles: lessonFilesReducer,
    profile: profileReducer,
    messages: messagesReducer,
    reports: reportsReducer,
    statistics: statisticsReducer,
    users: usersReducer,
    quiz: quizReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
});

export default store;
