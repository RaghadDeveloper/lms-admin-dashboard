import "./UsersTableHeader.css";

function UsersTableHeader() {
  return (
    <div className="users-header">
      <h5 className="id">ID</h5>
      <h5 className="user-img">User image</h5>
      <h5 className="role">Role</h5>
      <h5 className="email">Email</h5>
      <h5 className="birth-date">Birth of date</h5>
      <h5 className="ban">Ban</h5>
      {/* <h5 className="details">More info</h5> */}
    </div>
  );
}

export default UsersTableHeader;
