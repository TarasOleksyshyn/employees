
import './app-filter.css';

function AppFilter() {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="btn"
      >
        All employees
      </button>
      <button
        className="btn btn-outline-light"
        type="btn"
      >
        On promotion
      </button>
      <button
        className="btn btn-outline-light"
        type="btn"
      >
        Salary more 1000$
      </button>
    </div>
  );
}

export default AppFilter;