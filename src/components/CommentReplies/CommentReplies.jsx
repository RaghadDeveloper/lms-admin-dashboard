import "./CommentReplies.css";
import Comment from "../Comment/Comment";

function CommentReplies({ comment }) {
  return (
    <>
      {comment?.replies?.map((reply) => (
        <Comment key={reply.id} comment={reply} type={"reply"} />
      ))}
    </>
  );
}

export default CommentReplies;
