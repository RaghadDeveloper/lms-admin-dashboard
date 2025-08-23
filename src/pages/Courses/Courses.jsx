import { useSelector } from "react-redux";
import CoursesGroup from "../../components/CoursesGroup/CoursesGroup";
import CoursesPageHeader from "../../components/CoursesPageHeader/CoursesPageHeader";
import "./Courses.css";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import NoCourses from "../../components/NoCourses/NoCourses";
import NoResults from "../../components/NoResults/NoResults";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import PaginationControls from "../../components/PaginationControls/PaginationControls";

function Courses() {
  const [page, setPage] = useState(1);
  const { loading, error, courses, pagination } = useSelector(
    (state) => state.courses
  );
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <div>
      <CoursesPageHeader setIsFiltering={setIsFiltering} page={page} />

      {loading && <Loader />}

      {error && <ErrorMessage error={error} />}

      {!loading &&
        !error &&
        !courses?.length &&
        (isFiltering ? <NoResults /> : <NoCourses />)}

      {!loading && !error && courses?.length > 0 && (
        <>
          <CoursesGroup courses={courses} />
          <PaginationControls pagination={pagination} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default Courses;
