import { useEffect, useState } from "react";
import "./FilterUsers.css";
import Select from "../Select/Select";
import { banStatus, userRole } from "../../data/usersFilters";
import { useDispatch } from "react-redux";
import { getAllProfiles } from "../../features/users/usersThunk";

function FilterUsers({ page }) {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    role: 0,
    isBanned: 0,
    page,
  });

  const { role, isBanned } = filters;

  useEffect(() => {
    const requestFilters = {};

    if (isBanned === "1") requestFilters.only_banned = 1;
    if (role === "1") requestFilters.teachers = 1;
    if (role === "2") requestFilters.students = 1;

    dispatch(getAllProfiles({ ...requestFilters, page: 1 }));
  }, [isBanned, role, dispatch]);

  useEffect(() => {
    const requestFilters = {};

    if (isBanned === "1") requestFilters.only_banned = 1;
    if (role === "1") requestFilters.teachers = 1;
    if (role === "2") requestFilters.students = 1;

    dispatch(getAllProfiles({ ...requestFilters, page }));
  }, [page, dispatch]);

  return (
    <div className="filter-users">
      {/* <input placeholder="Search user" /> */}
      <div className="select-container">
        <Select
          options={banStatus}
          value={isBanned}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, isBanned: e.target.value }))
          }
        />
        <Select
          options={userRole}
          value={role}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, role: e.target.value }))
          }
        />
      </div>
    </div>
  );
}

export default FilterUsers;
