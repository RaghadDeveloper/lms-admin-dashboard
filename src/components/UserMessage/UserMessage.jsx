import { IoIosArrowDown } from "react-icons/io";
import "./UserMessage.css";
import { IoMailUnreadOutline } from "react-icons/io5";

function UserMessage({ num, message, open, setOpen }) {
  return (
    <div
      key={message.id}
      className={`message ${open === message.id ? "active" : ""} ${
        message.status
      }`}
    >
      <div onClick={() => setOpen(open !== message.id ? message.id : null)}>
        <p className="user">
          <span>{num}</span>
          {message.sender_username}
        </p>
        <p className={`msg-type ${message.message_type}`}>
          {message.message_type}
        </p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {open === message.id && <p className="msg-content">{message.content}</p>}
    </div>
  );
}

export default UserMessage;
