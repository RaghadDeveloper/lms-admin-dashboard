import "./UsersTable.css";
import { useSelector } from "react-redux";
import UsersTableHeader from "../UsersTableHeader/UsersTableHeader";
import UsersTableRow from "../UsersTableRow/UsersTableRow";
import Loader from "../Loader/Loader";
import PaginationControls from "../PaginationControls/PaginationControls";
import NoResults from "../NoResults/NoResults";

function UsersTable({ setPage }) {
  const { loading, banLoading, profiles, pagination } = useSelector(
    (state) => state.users
  );

  if (loading) return <Loader />;

  return (
    <>
      {!profiles?.length ? (
        <NoResults />
      ) : (
        <>
          <div className={`users-table ${banLoading ? "loading" : ""}`}>
            <UsersTableHeader />
            {profiles?.map((profile, index) => (
              <UsersTableRow key={index} profile={profile} />
            ))}
          </div>
          <PaginationControls pagination={pagination} setPage={setPage} />
        </>
      )}
    </>
  );
}

export default UsersTable;
