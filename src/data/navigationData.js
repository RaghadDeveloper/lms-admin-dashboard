import { FaBookOpen, FaUsers } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { TbDashboard, TbMessageReport, TbMessages } from "react-icons/tb";

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
    title: "Users Messages",
    link: "/messages",
  },
  {
    icon: TbMessageReport,
    title: "Reports",
    link: "/reports",
  },
  {
    icon: MdNotificationsActive,
    title: "Notifications",
    link: "/notifications",
  },
];
