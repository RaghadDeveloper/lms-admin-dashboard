import "./Navigation.css";
import { useState } from "react";
import Nav from "../Nav/Nav";
import { FiChevronLeft } from "react-icons/fi";
import { MdSwapHoriz } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import Logo from "./../../assets/images/logo.png";
import { navigationData } from "../../data/navigationData";

function Navigation() {
  const [nav, setNav] = useState(false);

  return (
    <div className={`navigation ${nav ? "active" : ""} `}>
      <span className="menu" onClick={() => setNav((prev) => !prev)}>
        <FiChevronLeft />
      </span>
      <header>
        <img src={Logo} alt="logo" className="logo" width={30} />
        <h1>
          <span>NEXORA</span> Academy
        </h1>
      </header>

      {navigationData.map((navData) => (
        <div key={navData.title}>
          <Nav Icon={navData.icon} title={navData.title} link={navData.link} />
          {navData.title === "Course Statisics" && <div className="line"></div>}
        </div>
      ))}

      <div className="line"></div>

      <Nav Icon={MdSwapHoriz} title={"Switch To Light Mode"} />
      <Nav Icon={HiOutlineLogout} title={"Logout"} />
    </div>
  );
}

export default Navigation;
