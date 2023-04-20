function showInfo({ amount, number, realNumber }) {
  return (
    <div className="my-4">
      <small className="text-muted">
        show {amount > number ? number : amount} record from {realNumber} entity
      </small>
    </div>
  );
}

export default showInfo;
