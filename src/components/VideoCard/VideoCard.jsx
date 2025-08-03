import "./VideoCard.css";
import { useNavigate, useParams } from "react-router-dom";

function formatTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  if (hours === 0) return `${minutes}Min`;
  if (minutes === 0) return `${hours}Hr`;
  return `${hours}Hr ${minutes}Min`;
}

function VideoCard({ num, lesson }) {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const { id, title, video_duration, is_free } = lesson;

  return (
    <div
      className={`video-card ${id == lessonId ? "active" : "f"}`}
      onClick={() => navigate(`lesson/${id}`)}
    >
      <div className="title">
        <span>{num}. </span>
        <h4>{title}</h4>
      </div>

      <div className="details">
        <p>Duration: {formatTime(video_duration)}</p>
        <p>{is_free ? "Free" : ""}</p>
      </div>
    </div>
  );
}

export default VideoCard;
