import "./NoReports.css";
import NoReport from "./../../assets/images/noReport.png";

function NoReports() {
  return (
    <div className="no-reports">
      <img src={NoReport} alt="No Reports" />
      <p>No reports available yet.</p>
    </div>
  );
}

export default NoReports;
