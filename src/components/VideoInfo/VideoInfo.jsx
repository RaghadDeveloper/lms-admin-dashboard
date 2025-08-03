import "./VideoInfo.css";
import { FaRegEdit } from "react-icons/fa";
import InfoBlock from "../InfoBlock/InfoBlock";

function formatTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  if (hours === 0) return `${minutes}Min`;
  if (minutes === 0) return `${hours}Hr`;
  return `${hours}Hr ${minutes}Min`;
}

function VideoInfo({ lesson, onCommentsClick }) {
  return (
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
        <InfoBlock label={"views"} value={lesson?.views_count} />
        <InfoBlock label={"Likes"} value={lesson?.likes_count} />
        <InfoBlock
          label={"Comments"}
          value={lesson?.comment_count}
          onClick={onCommentsClick}
        />
        <InfoBlock label={"Reports"} value={"X"} />
      </div>
    </div>
  );
}

export default VideoInfo;
