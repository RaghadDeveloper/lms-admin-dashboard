import { useSelector } from "react-redux";
import "./LessonComments.css";
import Comment from "../Comment/Comment";

function LessonComments() {
  const { comments } = useSelector((state) => state.lessons);

  return (
    <div className="lesson-comments card">
      <h2>Comments:</h2>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default LessonComments;
