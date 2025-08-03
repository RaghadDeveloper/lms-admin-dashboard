import "./FilterUsers.css";

function FilterUsers() {
  return (
    <div className="filter-users">
      <input placeholder="Search user" />
      <div className="select-container">
        <select>
          <option>Ban status</option>
          <option>Banned</option>
          <option>Unbanned</option>
        </select>
        <select>
          <option>Role</option>
          <option>teachers</option>
          <option>students</option>
        </select>
      </div>
    </div>
  );
}

export default FilterUsers;
