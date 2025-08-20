import StatisticCard from "../StatisticCard/StatisticCard";
import "./StatisticsCards.css";
import UsersLineChart from "../UsersLineChart/UsersLineChart.jsx";
import ReBarChart from "../ReBarChart/ReBarChart.jsx";
import { useSelector } from "react-redux";
import { GoBook } from "react-icons/go";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import RePieChart from "../PieChart/RePieChart.jsx";
import EarningsLineChart from "../EarningsLineChart/EarningsLineChart.jsx";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

function StatisticsCards() {
  const { courses, earnings, students, teachers } = useSelector(
    (state) => state.statistics
  );
  const StatisticsCardsData = [
    { title: "Students", icon: PiStudent, ...students },
    { title: "Teachers", icon: FaChalkboardTeacher, ...teachers },
    { title: "Courses", icon: GoBook, ...courses },
    { title: "Earnings", icon: IoCashOutline, ...earnings },
  ];

  return (
    <>
      <div className="statistics-cards">
        {StatisticsCardsData.map((statisticCardData, index) => (
          <StatisticCard key={index} data={statisticCardData} />
        ))}
      </div>
      <div className="statistics-cards">
        <UsersLineChart />
        <RePieChart />
        <ReBarChart />
        <EarningsLineChart />
      </div>
    </>
  );
}

export default StatisticsCards;
