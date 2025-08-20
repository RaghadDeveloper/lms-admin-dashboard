import "./MainPage.css";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import { useTheme } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../features/categories/categoriesThunk";
import { getProfile } from "../../features/profile/profileThunks";
import {
  categoriesStatistics,
  coursesStatistics,
  earningsStatistics,
  studentsStatistics,
  teachersStatistics,
} from "../../features/statistics/statisticsThunk";
import Loader from "../../components/Loader/Loader";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

function MainPage() {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const status = useSelector((state) => state.categories.status);
  const { loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile());

    dispatch(coursesStatistics(2025));
    dispatch(categoriesStatistics(""));
    dispatch(earningsStatistics(2025));
    dispatch(teachersStatistics(2025));
    dispatch(studentsStatistics(2025));
  }, [dispatch]);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCategories());
  }, [dispatch, status]);

  if (loading || status === "loading") return <Loader />;

  return (
    <div className={`main-page ${theme}`}>
      <Navigation />
      <main>
        <Header />
        <div className="content">
          <Outlet />
          <ScrollToTopButton />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
