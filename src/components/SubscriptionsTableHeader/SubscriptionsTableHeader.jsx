import "./SubscriptionsTableHeader.css";

function SubscriptionsTableHeader() {
  return (
    <div className="subscription-header">
      <h5 className="id">ID</h5>
      <h5 className="student-name">Student</h5>
      <h5 className="teacher-name">Teacher</h5>
      <h5 className="course-title">Course</h5>
      <h5 className="earning">Total earning</h5>
      <h5 className="earning">Teacher earnings</h5>
      <h5 className="earning">Platform earnings</h5>
    </div>
  );
}

export default SubscriptionsTableHeader;
