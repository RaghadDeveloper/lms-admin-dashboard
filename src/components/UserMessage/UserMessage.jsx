import { IoIosArrowDown } from "react-icons/io";
import "./UserMessage.css";
import { IoMailUnreadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getMessageDetails } from "../../features/messages/messagesThunk";

function UserMessage({ num, message, open, setOpen }) {
  const dispatch = useDispatch();
  const { detailsLoading } = useSelector((state) => state.messages);

  const handleOpen = () => {
    dispatch(getMessageDetails(message.id));
    setOpen(open !== message.id ? message.id : null);
  };

  return (
    <div
      key={message.id}
      className={`message ${open === message.id ? "active" : ""} ${
        message.status
      }`}
    >
      <div onClick={handleOpen}>
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
      {open === message.id && (
        <p className="msg-content">
          {detailsLoading ? "Loading..." : message.content}
        </p>
      )}
    </div>
  );
}

export default UserMessage;
