import "./Comment.css";
import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import CommentReplies from "../CommentReplies/CommentReplies";

function Comment({ comment, type }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <>
      <div className={`comment ${type && "reply"}`}>
        <img className="user-img" src={comment?.author?.avatar_url} />
        <div>
          <div className="comment-content">
            <h4>{comment?.author?.username}</h4>
            <p>{comment.content}</p>
          </div>
          <div className="reactions">
            {comment.likes_count > 0 && (
              <div>
                {comment.likes_count}
                <BiSolidLike className="liked" />
              </div>
            )}
            {!type && comment.replies.length > 0 && (
              <span onClick={() => setShowReplies(true)}>
                {comment.replies.length} Reply
              </span>
            )}
          </div>
        </div>
      </div>
      {showReplies && <CommentReplies comment={comment} />}
    </>
  );
}

export default Comment;
