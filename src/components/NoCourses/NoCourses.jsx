import "./NoCourses.css";
import noCourses from "./../../assets/images/noResults.png";

function NoCourses() {
  return (
    <div className="no-courses">
      <img src={noCourses} alt="No Courses img" />
      <p>There are currently no courses on the platform :(</p>
      <p>
        Courses will appear here once they have been created by authorized
        instructors or content managers.
      </p>
    </div>
  );
}

export default NoCourses;
