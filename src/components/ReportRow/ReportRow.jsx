import "./ReportRow.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function ReportRow({ num, report }) {
  return (
    <div
      className={`report-row ${report?.status === "unread" ? "not-read" : ""}`}
    >
      <p className="id">{num || 1}</p>
      <p className="user">{report?.reporter_username}</p>
      <p className="lesson">{report?.lesson_title}</p>
      <p className="rep-content">{report?.content}</p>
      <button className="mark-as-read">
        <MdOutlineMarkEmailUnread />
      </button>
      <button className="details">See more</button>
    </div>
  );
}

export default ReportRow;
