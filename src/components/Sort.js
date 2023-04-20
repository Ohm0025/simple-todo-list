function Sort(props) {
  return (
    <div className="d-flex align-items-center">
      <small className="text-muted">{"Sort : "}</small>
      <select
        className="form-select form-select-sm w-auto"
        onChange={(e) => props.changeSortTitle(e.target.value)}>
        <option value="-" defaultChecked>
          {" "}
          -{" "}
        </option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
}
export default Sort;
