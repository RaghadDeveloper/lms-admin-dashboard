import "./UsersLineChart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { useEffect, useState } from "react";
import {
  studentsStatistics,
  teachersStatistics,
} from "../../features/statistics/statisticsThunk";
import { motion } from "framer-motion";

const formatter = new Intl.DateTimeFormat("en", { month: "short" });

function UsersLineChart() {
  const dispatch = useDispatch();
  const [year, setYear] = useState(2025);
  const [maxValue, setMaxValue] = useState(0);
  const { teachers, students } = useSelector((state) => state.statistics);

  const teachersStatisticsData = teachers?.statistics;
  const studentsStatisticsData = students?.statistics;

  const mergedData = teachersStatisticsData?.map((item1) => {
    const match = studentsStatisticsData?.find(
      (item2) => item2.month === item1.month
    );
    return {
      month: formatter.format(new Date(2025, item1.month - 1)),
      Teachers: item1.total_users,
      Students: match ? match.total_users : 0,
    };
  });

  useEffect(() => {
    dispatch(teachersStatistics(year));
    dispatch(studentsStatistics(year));
  }, [dispatch, year]);

  useEffect(() => {
    setMaxValue(
      Math.max(
        ...(mergedData?.map((item) => item.Teachers) ||
          mergedData?.map((item) => item.Students) || [0])
      )
    );
  }, [mergedData]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="statistic-card card5"
    >
      <div className="header">
        <h4>All Users</h4>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <LineChart
        width={540}
        height={410}
        data={mergedData}
        margin={{ top: 25, right: 5, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickCount={10} domain={[0, Math.ceil(maxValue) + 10]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Teachers"
          stroke="#2c7da0"
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Students"
          stroke="#3caddd"
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </motion.div>
  );
}

export default UsersLineChart;
