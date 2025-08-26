import "./VideoInfo.css";
import { FaRegEdit } from "react-icons/fa";
import InfoBlock from "../InfoBlock/InfoBlock";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../../features/users/usersThunk";
import { useDispatch } from "react-redux";
import ProfilesList from "../ProfilesList/ProfilesList";

function formatTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  if (hours === 0) return `${minutes}Min`;
  if (minutes === 0) return `${hours}Hr`;
  return `${hours}Hr ${minutes}Min`;
}

function VideoInfo({ lesson, onCommentsClick }) {
  const dispatch = useDispatch();
  const [showProfilesList, setShowProfilesList] = useState(false);

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

  const handleGetViews = async () => {
    if (!lesson?.views_count) return;
    setShowProfilesList(true);
    await dispatch(getAllProfiles({ views_lesson_id: lesson.id }));
  };

  const handleGetLikes = async () => {
    if (!lesson?.likes_count) return;
    setShowProfilesList(true);
    await dispatch(getAllProfiles({ likes_lesson_id: lesson.id }));
  };

  return (
    <>
      <div className="video-info card">
        <video poster={lesson?.image_url} controls>
          <source src={lesson?.video_url} type="video/mp4" />
        </video>

        <h2>
          <span>01. </span>
          {lesson?.title}
        </h2>

        <p>{lesson?.description}</p>
        <div className="row">
          <InfoBlock
            label={"Duration"}
            value={lesson && formatTime(lesson?.video_duration)}
          />
          <InfoBlock
            label={"views"}
            value={lesson?.views_count}
            onClick={handleGetViews}
          />
          <InfoBlock
            label={"Likes"}
            value={lesson?.likes_count}
            onClick={handleGetLikes}
          />
          <InfoBlock
            label={"Comments"}
            value={lesson?.comment_count}
            onClick={onCommentsClick}
          />
          <InfoBlock label={"Reports"} value={"X"} />
        </div>
      </div>
      {showProfilesList && <ProfilesList setIsShow={setShowProfilesList} />}
    </>
  );
}

export default VideoInfo;
