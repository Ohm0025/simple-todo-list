function Pagination(props) {
  const list = new Array(props.length).fill(0).map((item, index) => {
    return (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => props.changePage(index + 1)}>
          {index + 1}
        </button>
      </li>
    );
  });
  return (
    <ul className="pagination pagination-sm">
      <li className="page-item">
        <button className="page-link">
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </li>

      {list}

      <li className="page-item">
        <button className="page-link">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
