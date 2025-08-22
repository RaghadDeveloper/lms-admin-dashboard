import { useDispatch } from "react-redux";
import "./ReportRow.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { getReportDetails } from "../../features/reports/reportsThunk";

function ReportRow({ num, report }) {
  const dispatch = useDispatch();
  const handleReadReport = () => {
    dispatch(getReportDetails(report.id));
  };
  return (
    <div
      className={`report-row ${report?.status === "unread" ? "not-read" : ""}`}
    >
      <p className="id">{num || 1}</p>
      <p className="user">{report?.reporter_username}</p>
      <p className="lesson">{report?.lesson_title}</p>
      <p className="rep-content">{report?.content}</p>
      <button className="mark-as-read" onClick={handleReadReport}>
        <MdOutlineMarkEmailUnread />
      </button>
      <button className="details">See more</button>
    </div>
  );
}

export default ReportRow;
