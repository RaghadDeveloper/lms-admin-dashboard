import "./NoReports.css";
import NoReport from "./../../assets/images/noReport.png";

function NoReports() {
  return (
    <div className="no-reports">
      <img src={NoReport} alt="No Reports" />
      <p>
        Once students start completing lessons, their reports will be available
        on this page.
      </p>
    </div>
  );
}

export default NoReports;
