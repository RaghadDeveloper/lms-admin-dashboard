import { useDispatch, useSelector } from "react-redux";
import ReportRow from "../../components/ReportRow/ReportRow";
import ReportsTableHeader from "../../components/ReportsTableHeader/ReportsTableHeader";
import "./Reports.css";
import { useEffect } from "react";
import { getAllReports } from "../../features/reports/reportsThunk";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import NoReports from "../../components/NoReports/NoReports";

function Reports() {
  const dispatch = useDispatch();
  const { loading, error, reports } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(getAllReports());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  if (!reports) return <NoReports />;

  return (
    <div className="reports">
      <h1>Reports</h1>
      <p className="read-all">Mark all as read</p>
      <div className="reports-table">
        <ReportsTableHeader />
        {reports.map((report, index) => (
          <ReportRow key={index} num={index + 1} report={report} />
        ))}
      </div>
    </div>
  );
}

export default Reports;
