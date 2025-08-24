import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./PaginationControls.css";

function PaginationControls({ pagination, setPage }) {
  return (
    <div className="pagination-controls">
      <button
        disabled={!pagination.prev}
        onClick={() => setPage((prev) => prev - 1)}
      >
        <GrFormPrevious />
      </button>
      {pagination.pages.map((page) => (
        <span
          key={page.page}
          onClick={() => setPage(page.page)}
          className={`${page.page == pagination.currentPage ? "active " : ""}`}
        >
          {page.page}
        </span>
      ))}
      <button
        disabled={!pagination.next}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <GrFormNext />
      </button>
    </div>
  );
}

export default PaginationControls;
