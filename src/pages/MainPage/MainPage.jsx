import "./MainPage.css";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

function MainPage() {
  return (
    <div className={`main-page`}>
      <Navigation />
      <main>
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
