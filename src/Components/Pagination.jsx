const Pagination = ({ reviewsPerPage, totalReviews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <button
          onClick={() => paginate(number)}
          className="pagination-link"
          key={number}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
