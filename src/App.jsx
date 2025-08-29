import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";
import Verification from "./pages/Verification/Verification";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ProfileSetup from "./pages/ProfileSetup/ProfileSetup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute ";

import MainPage from "./pages/MainPage/MainPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from "./pages/Courses/Courses";
import Messages from "./pages/Messages/Messages";
import Notifications from "./pages/Notifications/Notifications";
import Reports from "./pages/Reports/Reports";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseInfo from "./components/CourseInfo/CourseInfo";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuthFromToken } from "./features/auth/authSlice";
import LessonInfo from "./components/LessonInfo/LessonInfo";
import Users from "./pages/Users/Users";
import { setUserFromToken } from "../../lms-instructor-portal/src/features/auth/authSlice";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import QuizDetails from "./pages/QuizDetails/QuizDetails";
import Subscriptions from "./pages/Subscriptions/Subscriptions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      dispatch(setAuthFromToken(token));
    }
    if (user) {
      dispatch(setUserFromToken(user));
    }
  }, [dispatch]);

  return (
    <BrowserRouter basename="/lms-admin-dashboard/">
      <ScrollToTop />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="verification" element={<Verification />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/complete-profile" element={<ProfileSetup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Dashboard />} />
            <Route path="/courses">
              <Route index element={<Courses />} />
              <Route path=":courseId" element={<CourseDetails />}>
                <Route index element={<CourseInfo />} />
                <Route path="lesson/:lessonId" element={<LessonInfo />} />
                <Route
                  path="lesson/:lessonId/pdf/:pdfId"
                  element={<LessonInfo />}
                />
              </Route>
              <Route path=":courseId/quiz/:quizId" element={<QuizDetails />} />
            </Route>
            <Route path="/users" element={<Users />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
