import { useEffect, useState } from "react";
import "./Messages.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../../features/messages/messagesThunk";
import UserMessage from "../../components/UserMessage/UserMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import Select from "../../components/Select/Select";

function Messages() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(null);
  const { loading, error, messages } = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="messages">
      <h1>Users Messages</h1>
      <div className="filters">
        <Select
          text={"Read Status"}
          options={[
            { id: 0, name: "Read & Unread" },
            { id: 1, name: "Read" },
            { id: 2, name: "Unread" },
          ]}
        />
        <Select
          text={"Message type"}
          options={[
            { id: 0, name: "Message type" },
            { id: 1, name: "Complaints" },
            { id: 2, name: "Suggestions" },
            { id: 3, name: "Questions" },
          ]}
        />
      </div>
      {messages.map((message, index) => (
        <UserMessage
          key={message.id}
          num={index + 1}
          message={message}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}

export default Messages;
