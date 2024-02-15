function TodoContent(props) {
  return (
    <div className="d-flex align-items-center">
      <span
        className="text-secondary flex-grow-1"
        role="button"
        onClick={() => props.changeIsEdit()}>
        {props.item.title}
      </span>

      <div className="btn-group">
        <button
          className="btn btn-info"
          onClick={() =>
            props.updateTodo(props.item.id, {
              completed: !props.item.completed,
            })
          }>
          <i
            className={`fa-solid fa-toggle-${
              props.item.completed ? "on" : "off"
            }`}></i>
        </button>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            props.removeTodo(props.item.id);
          }}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
export default TodoContent;
