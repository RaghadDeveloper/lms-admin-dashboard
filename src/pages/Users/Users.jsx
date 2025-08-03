import "./Users.css";
import FilterUsers from "../../components/FilterUsers/FilterUsers";
import UsersTable from "../../components/UsersTable/UsersTable";

function Users() {
  return (
    <div className="users">
      <h1>Users</h1>
      <FilterUsers />
      <UsersTable />
    </div>
  );
}

export default Users;
