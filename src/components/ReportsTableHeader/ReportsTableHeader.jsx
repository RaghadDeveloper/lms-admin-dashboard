import "./ReportsTableHeader.css";

function ReportsTableHeader() {
  return (
    <div className="reports-header">
      <h5 className="id">ID</h5>
      <h5 className="user">User</h5>
      <h5 className="lesson">Lesson</h5>
      <h5 className="rep-content">Content</h5>
      <h5 className="mark-as-read">Read</h5>
      <h5 className="details">Details</h5>
    </div>
  );
}

export default ReportsTableHeader;
