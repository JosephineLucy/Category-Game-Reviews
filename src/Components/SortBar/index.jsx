import "./styles.css";

const SortBar = ({ setOrderBy, setSortBy }) => {
  function handleOrder(e) {
    setOrderBy(e.target.value);
  }

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="sort-bar">
      <div className="sort-bar__menus">
        <select name="order-by" id="order-by" onChange={(e) => handleOrder(e)}>
          <option value="">Order-by</option>
          <option value="desc">Order-by descending</option>
          <option value="asc">Order-by ascending</option>
        </select>

        <select name="sort-by" id="sort-by" onChange={(e) => handleSort(e)}>
          <option value="">Sort-by</option>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
