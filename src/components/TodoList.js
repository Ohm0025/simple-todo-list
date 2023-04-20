import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todo.map((item) => {
        return (
          <TodoItem
            item={item}
            key={item.id}
            removeTodo={props.removeTodo}
            updateTodo={props.updateTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
