import { FaBookOpen, FaUsers } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { TbDashboard, TbMessages } from "react-icons/tb";

export const navigationData = [
  {
    icon: TbDashboard,
    title: "Dashboard",
    link: "/",
  },
  {
    icon: FaBookOpen,
    title: "Courses",
    link: "/courses",
  },
  {
    icon: FaUsers,
    title: "Users",
    link: "/users",
  },
  {
    icon: TbMessages,
    title: "Messages",
    link: "/messages",
  },
  {
    icon: MdNotificationsActive,
    title: "Notifications",
    link: "/notifications",
  },
  {
    icon: PiArticleNyTimesLight,
    title: "Articles",
    link: "/articles",
  },
];
