import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Signup from "./pages/Signup/Signup";
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
import Articles from "./pages/Articles/Articles";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseInfo from "./components/CourseInfo/CourseInfo";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuthFromToken } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setAuthFromToken(token));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
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
              </Route>
            </Route>
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/articles" element={<Articles />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
