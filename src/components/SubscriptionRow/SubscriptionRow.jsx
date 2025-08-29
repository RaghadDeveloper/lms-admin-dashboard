import "./SubscriptionRow.css";

function SubscriptionRow({ num, subscription }) {
  return (
    <div className="subscription-row">
      <span className="id">{num}</span>
      <p className="student-name">{subscription.student.username}</p>
      <p className="teacher-name">{subscription.teacher.username}</p>
      <p className="course-title">{subscription.course.title}</p>
      <p className="earning">{subscription.amount}</p>
      <p className="earning">{subscription.teacher_earning}</p>
      <p className="earning">{subscription.platform_earning}</p>
    </div>
  );
}

export default SubscriptionRow;
