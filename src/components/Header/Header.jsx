import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { HiOutlineLogout, HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import ProfileImg from "./../../assets/images/profileImg.jpg";
import { useTheme } from "../../context/ThemeContext";
import { useSelector } from "react-redux";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { profile } = useSelector((state) => state.profile);

  return (
    <header className={`main-header ${theme}`}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="header-icons">
        <Link to={"/notifications"}>
          <MdNotificationsActive className="icon" />
        </Link>
        <Link to={"/messages"}>
          <TbMessages className="icon" />
        </Link>

        <div className="divider"></div>
        <HiOutlineMoon className="icon" onClick={toggleTheme} />
        <HiOutlineLogout className="icon" />
        <div className="divider"></div>
        <img className="user" src={profile?.avatar_url} alt="" />
      </div>
    </header>
  );
}

export default Header;
