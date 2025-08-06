import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import coursesReducer from "../features/courses/coursesSlice";
import lessonsReducer from "../features/lessons/lessonsSlice";
import profileReducer from "../features/profile/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    courses: coursesReducer,
    lessons: lessonsReducer,
    profile: profileReducer,
  },
});

export default store;
