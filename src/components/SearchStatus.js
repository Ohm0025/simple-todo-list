function SearchStatus(props) {
  return (
    <div className="btn-group">
      <input
        defaultChecked
        type="radio"
        className="btn-check"
        name="status"
        id="null"
        onClick={() => props.changeStatus(null)}></input>
      <label htmlFor="null" className="btn btn-outline-secondary">
        <i className="fa-solid fa-list"></i>
      </label>

      <input
        type="radio"
        className="btn-check"
        name="status"
        id="false"
        onClick={() => props.changeStatus(false)}></input>
      <label htmlFor="false" className="btn btn-outline-secondary">
        <i className="fa-solid fa-clipboard"></i>
      </label>

      <input
        type="radio"
        className="btn-check"
        name="status"
        id="true"
        onClick={() => props.changeStatus(true)}></input>
      <label htmlFor="true" className="btn btn-outline-secondary">
        <i className="fa-solid fa-clipboard-check"></i>
      </label>
    </div>
  );
}
export default SearchStatus;
