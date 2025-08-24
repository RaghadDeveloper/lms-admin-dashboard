import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./ReBarChart.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
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

function ReBarChart() {
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
    "Total users": item.total_users,
  }));

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="statistic-card card7"
    >
      <div className="header">
        <h4>Popular Categories</h4>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <BarChart width={530} height={410} data={chartData}>
        <CartesianGrid strokeDasharray="100 10" />
        <XAxis dataKey="Category" />
        <YAxis tickCount={10} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total users" barSize={20} radius={[10, 10, 0, 0]}>
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </motion.div>
  );
}

export default ReBarChart;
