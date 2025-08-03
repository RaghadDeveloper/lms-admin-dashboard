import "./UsersTable.css";
import profileImg from "./../../assets/images/profileImg.jpg";
import { FaBan } from "react-icons/fa";

function UsersTable() {
  return (
    <div className="users-table">
      <div className="users-header">
        <h5 className="id">ID</h5>
        <h5 className="user-img">User image</h5>
        <h5 className="role">Role</h5>
        <h5 className="email">Email</h5>
        <h5 className="birth-date">Birth of date</h5>
        <h5 className="ban">Ban</h5>
        <h5 className="details">More info</h5>
      </div>

      <div className="user-row">
        <p className="id">1</p>
        <div className="user-img">
          <img src={profileImg} alt="user img" />
        </div>
        <p className="role">teacher</p>
        <p className="email">username@example.com</p>
        <p className="birth-date">23/04/2001</p>
        <button className="ban">
          <FaBan />
        </button>
        <button className="details">See profile</button>
      </div>
      <div className="user-row">
        <p className="id">2</p>
        <div className="user-img">
          <img src={profileImg} alt="user img" />
        </div>
        <p className="role">teacher</p>
        <p className="email">username@example.com</p>
        <p className="birth-date">23/04/2001</p>
        <button className="ban">
          <FaBan />
        </button>
        <button className="details">See profile</button>
      </div>
      <div className="user-row">
        <p className="id">3</p>
        <div className="user-img">
          <img src={profileImg} alt="user img" />
        </div>
        <p className="role">teacher</p>
        <p className="email">username@example.com</p>
        <p className="birth-date">23/04/2001</p>
        <button className="ban">
          <FaBan />
        </button>
        <button className="details">See profile</button>
      </div>
      <div className="user-row">
        <p className="id">4</p>
        <div className="user-img">
          <img src={profileImg} alt="user img" />
        </div>
        <p className="role">teacher</p>
        <p className="email">username@example.com</p>
        <p className="birth-date">23/04/2001</p>
        <button className="ban">
          <FaBan />
        </button>
        <button className="details">See profile</button>
      </div>
    </div>
  );
}

export default UsersTable;
