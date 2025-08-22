import "./NoMessages.css";
import noMessages from "./../../assets/images/noMessages.png";

function NoMessages() {
  return (
    <div className="no-messages">
      <img src={noMessages} alt="No Messages" />
      <p>No Messages yet</p>
      <p>Check back later to stay updated on new messages.</p>
    </div>
  );
}

export default NoMessages;
