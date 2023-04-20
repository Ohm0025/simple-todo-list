import EditBar from "./EditBar";
import TodoContent from "./TodoContent";
import { useState } from "react";

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const changeIsEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <li
      className={`list-group-item callout-${
        props.item.completed ? "success" : "warning"
      }`}>
      {isEdit ? (
        <EditBar
          updateTodo={props.updateTodo}
          changeIsEdit={changeIsEdit}
          oldTitle={props.item.title}
          id={props.item.id}
        />
      ) : (
        <TodoContent
          item={props.item}
          removeTodo={props.removeTodo}
          changeIsEdit={changeIsEdit}
          updateTodo={props.updateTodo}
        />
      )}
    </li>
  );
}

export default TodoItem;
