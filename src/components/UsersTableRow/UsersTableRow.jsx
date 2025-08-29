import "./UsersTableRow.css";
import { useDispatch, useSelector } from "react-redux";
import { banUser } from "../../features/users/usersThunk";

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

function UsersTableRow({ profile }) {
  const dispatch = useDispatch();
  const { banLoading } = useSelector((state) => state.users);

  const handleBan = () => {
    dispatch(banUser(profile.user_id));
  };

  return (
    <div className="user-row">
      <p className="id">{profile.id - 1}</p>
      <div className="user-img">
        <img src={profile.avatar_url} alt="user img" />
      </div>
      <p className="role">{profile.role}</p>
      <p className="email">{profile.email}</p>
      <p className="birth-date">
        {profile?.birth_date ? formatDate(profile?.birth_date) : "undefiend"}
      </p>
      {profile.isBanned ? (
        <button className="unban" onClick={handleBan} disabled={banLoading}>
          UnBan
        </button>
      ) : (
        <button className="ban" onClick={handleBan} disabled={banLoading}>
          Ban
        </button>
      )}
      {/* <button className="details">See profile</button> */}
    </div>
  );
}

export default UsersTableRow;
