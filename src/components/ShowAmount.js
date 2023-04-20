function ShowAmount(props) {
  return (
    <div className="d-flex align-items-center">
      <small className="text-secondary">ShowAmount : </small>
      <select
        className="form-select form-select-sm w-auto"
        onChange={(e) => {
          props.changeAmount(e.target.value);
        }}>
        <option value={2}>2</option>
        <option value={4}>4</option>
        <option value={6}>6</option>
        <option value={8}>8</option>
        <option value={10}>10</option>
      </select>
    </div>
  );
}

export default ShowAmount;
