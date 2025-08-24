import "./RePieChart.css";
import { useEffect, useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import axiosInstance from "../../api/axiosInstance";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const COLORS = [
  "#d0e8ef",
  "#a8d3e2",
  "#82bfd6",
  "#5bacc9",
  "#3798bc",
  "#2c7da0",
  "#2a6f90",
  "#235f7b",
  "#1e4f66",
  "#1a4053",
];

function RePieChart() {
  const { categories } = useSelector((state) => state.statistics);

  const [year, setYear] = useState("");
  const [data, setData] = useState(categories);

  useEffect(() => {
    if (year) {
      axiosInstance
        .get(`/admin/category/statistics?year=${year}`)
        .then((res) => setData(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [year]);

  const chartData = data?.map((item) => ({
    ...item,
    Category: item.name,
    Courses: item.total_courses,
  }));

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="statistic-card card6"
    >
      <div className="header">
        <h4>Courses by Category</h4>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Courses"
            isAnimationActive={false}
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="categories-names">
        {data.map((category, index) => (
          <span key={index} style={{ color: COLORS[index] }}>
            {category.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default RePieChart;
