import { useDispatch, useSelector } from "react-redux";
import "./ReportRow.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { getReportDetails } from "../../features/reports/reportsThunk";
import { useNavigate } from "react-router-dom";

function ReportRow({ num, report }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reportInfo } = useSelector((state) => state.reports);

  const handleReadReport = () => {
    dispatch(getReportDetails(report.id));
  };

  const handleReportDetails = async () => {
    const result = await dispatch(getReportDetails(report.id));
    if (getReportDetails.fulfilled.match(result))
      navigate(
        `/courses/${reportInfo.course_id}/lesson/${reportInfo.lesson_id}`
      );
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
      <button className="details" onClick={handleReportDetails}>
        See more
      </button>
    </div>
  );
}

export default ReportRow;
