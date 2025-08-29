import { useEffect, useState } from "react";
import "./Messages.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../../features/messages/messagesThunk";
import UserMessage from "../../components/UserMessage/UserMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import Select from "../../components/Select/Select";
import NoMessages from "../../components/NoMessages/NoMessages";
import NoResults from "../../components/NoResults/NoResults";

function Messages() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(null);
  const { loading, error, messages } = useSelector((state) => state.messages);
  const [selectedFilters, setSelectedFilters] = useState({
    status: "",
    message_type: "",
  });

  useEffect(() => {
    const filters = {};

    switch (selectedFilters.status) {
      case "1":
        filters.status = "read";
        break;
      case "2":
        filters.status = "unread";
        break;
      default:
        filters.status = "";
    }

    switch (selectedFilters.message_type) {
      case "1":
        filters.message_type = "complaint";
        break;
      case "2":
        filters.message_type = "suggestion";
        break;
      case "3":
        filters.message_type = "question";
        break;
      default:
        filters.message_type = "";
    }

    dispatch(getAllMessages(filters));
  }, [dispatch, selectedFilters]);

  if (
    !messages.length &&
    !selectedFilters.status &&
    !selectedFilters.message_type
  )
    return <NoMessages />;

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
          value={selectedFilters.status}
          onChange={(e) =>
            setSelectedFilters((prev) => ({ ...prev, status: e.target.value }))
          }
        />
        <Select
          text={"Message type"}
          options={[
            { id: 0, name: "Message type" },
            { id: 1, name: "Complaints" },
            { id: 2, name: "Suggestions" },
            { id: 3, name: "Questions" },
          ]}
          value={selectedFilters.message_type}
          onChange={(e) =>
            setSelectedFilters((prev) => ({
              ...prev,
              message_type: e.target.value,
            }))
          }
        />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : !messages.length ? (
        <NoResults />
      ) : (
        messages.map((message, index) => (
          <UserMessage
            key={message.id}
            num={index + 1}
            message={message}
            open={open}
            setOpen={setOpen}
          />
        ))
      )}
    </div>
  );
}

export default Messages;
