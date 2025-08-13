import Button from "../Button/Button";
import "./RejectForm.css";

function RejectForm({ onSubmit, reviewData, setReviewData }) {
  return (
    <>
      <div
        className="overlay"
        onClick={() =>
          setReviewData({
            approval_status: "",
            rejection_notes: "",
          })
        }
      />
      <form className="rejection-form" onSubmit={onSubmit}>
        <div>
          <h4>Rejection notes</h4>
          <span
            onClick={() =>
              setReviewData({
                approval_status: "",
                rejection_notes: "",
              })
            }
          >
            &times;
          </span>
        </div>
        <textarea
          value={reviewData.rejection_notes}
          onChange={(e) =>
            setReviewData((reviewData) => ({
              ...reviewData,
              rejection_notes: e.target.value,
            }))
          }
          required
        />
        <Button type={"submit"} className={"rejected"}>
          Reject
        </Button>
      </form>
    </>
  );
}

export default RejectForm;
