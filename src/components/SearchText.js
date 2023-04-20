import { useState } from "react";

function SearchText(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        value={props.searchText}
        placeholder="search title"
        className="form-control"
        onChange={(e) => props.changeSearchText(e.target.value)}
      />
      <button
        className="btn btn-secondary"
        onClick={() => props.changeSearchText("")}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default SearchText;
