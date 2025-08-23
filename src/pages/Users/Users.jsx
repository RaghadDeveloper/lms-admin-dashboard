import "./Users.css";
import FilterUsers from "../../components/FilterUsers/FilterUsers";
import UsersTable from "../../components/UsersTable/UsersTable";
import { useState } from "react";

function Users() {
  const [page, setPage] = useState(1);

  return (
    <div className="users">
      <h1>Users</h1>
      <FilterUsers page={page} />
      <UsersTable setPage={setPage} />
    </div>
  );
}

export default Users;
