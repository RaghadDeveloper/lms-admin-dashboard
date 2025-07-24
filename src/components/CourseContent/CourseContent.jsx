import "./CourseContent.css";
import VideoCard from "../VideoCard/VideoCard";

function CourseContent({ lessons }) {
  return (
    <div className="course-content">
      <h3>Course Content</h3>

      {lessons?.map((lesson, index) => (
        <VideoCard key={index} num={index + 1} lesson={lesson} />
      ))}

      {!lessons && <p>This course doesn't have any lesson.</p>}
    </div>
  );
}

export default CourseContent;
