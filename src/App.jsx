import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage/MainPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from "./pages/Courses/Courses";
import Messages from "./pages/Messages/Messages";
import Notifications from "./pages/Notifications/Notifications";
import Articles from "./pages/Articles/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route path="/courses">
            <Route index element={<Courses />} />
          </Route>
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
