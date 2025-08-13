import "./CourseInfo.css";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../InfoBlock/InfoBlock";
import Button from "../Button/Button";
import { reviewCourse } from "../../features/courses/coursesThunk";
import { useEffect, useState } from "react";
import RejectForm from "../RejectForm/RejectForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function formatTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  if (hours === 0) return `${minutes}Min`;
  if (minutes === 0) return `${hours}Hr`;
  return `${hours}Hr ${minutes}Min`;
}

function CourseInfo() {
  const dispatch = useDispatch();
  const { loading, error, course } = useSelector((state) => state.courses);
  const [reviewData, setReviewData] = useState({
    approval_status: "approved",
    rejection_notes: "",
  });

  const handleCourseApprove = () => {
    setReviewData({ approval_status: "approved" });
    dispatch(reviewCourse({ courseId: id, data: reviewData }));
  };
  const handleCourseReject = (e) => {
    e.preventDefault();
    dispatch(reviewCourse({ courseId: id, data: reviewData }));
  };

  const {
    id,
    image_url,
    requirements_to_start,
    description,
    price,
    course_duration,
    lessons_count,
    rating,
    subscribers_count,
    tags,
    approval_status,
    rejection_notes,
  } = course;

  useEffect(() => {
    if (reviewData.approval_status === "rejected") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [reviewData.approval_status]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <div className="course-info">
        <img src={image_url} alt="Course Img" />

        <div className="about">
          <h4>Requirement to Start</h4>
          <pre>{requirements_to_start}</pre>
        </div>

        <div className="about">
          <h4>Description</h4>
          <pre>{description}</pre>
        </div>

        {tags.length > 0 && (
          <div className="about">
            <h4>Tags</h4>
            <div className="tags">
              {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>
        )}

        {approval_status === "rejected" && (
          <div className="about">
            <h4>Rejection notes</h4>
            <pre>{rejection_notes}</pre>
          </div>
        )}

        <div className="row">
          <InfoBlock
            label={"price"}
            value={price === "Free" ? price : `$${price}`}
          />
          <InfoBlock label={"Duration"} value={formatTime(course_duration)} />
          <InfoBlock label={"Lessons"} value={lessons_count} />
          <InfoBlock label={"Rating"} value={rating} />
          <InfoBlock label={"Students"} value={subscribers_count} />
        </div>
      </div>
      {approval_status === "pending" && (
        <div className="buttons-container">
          <Button className={"approved"} onClick={handleCourseApprove}>
            Approve
          </Button>
          <Button
            className={"rejected"}
            onClick={() =>
              setReviewData((reviewData) => ({
                ...reviewData,
                approval_status: "rejected",
              }))
            }
          >
            Reject
          </Button>
        </div>
      )}
      {reviewData.approval_status === "rejected" && (
        <RejectForm
          onSubmit={handleCourseReject}
          reviewData={reviewData}
          setReviewData={setReviewData}
        />
      )}
    </>
  );
}

export default CourseInfo;
