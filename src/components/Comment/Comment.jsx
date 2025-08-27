import "./Comment.css";
import { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import CommentReplies from "../CommentReplies/CommentReplies";
import ProfilesList from "../ProfilesList/ProfilesList";
import { getAllProfiles } from "../../features/users/usersThunk";
import { useDispatch } from "react-redux";

function Comment({ comment, type }) {
  const dispatch = useDispatch();
  const [showProfilesList, setShowProfilesList] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  useEffect(() => {
    if (showProfilesList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showProfilesList]);

  const handleGetLikes = async () => {
    if (!comment.likes_count) return;
    setShowProfilesList(true);
    await dispatch(getAllProfiles({ likes_comment_id: comment.id }));
  };

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
              <span onClick={handleGetLikes}>
                {comment.likes_count}
                <BiSolidLike className="liked" />
              </span>
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
      {showProfilesList && <ProfilesList setIsShow={setShowProfilesList} />}
    </>
  );
}

export default Comment;
