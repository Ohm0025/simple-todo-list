import { useState } from "react";

function EditBar(props) {
  const [title, setTitle] = useState(props.oldTitle || "");
  const [error, setError] = useState("");

  //handle save
  const handleClickSave = () => {
    if (title === "") {
      setError("Title is required.");
    } else {
      setError("");
      if (props.oldTitle) {
        //edit task
        props.updateTodo(props.id, { title: title });
        props.changeIsEdit();
      } else {
        //create todo
        props.createTodo(title);
      }
      setTitle("");
    }
  };

  //handle xmark
  const handleXmark = () => {
    if (props.oldTitle) {
      props.changeIsEdit();
    } else {
      setTitle("");
    }
  };
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          value={title}
          placeholder="Put new task"
          className={`form-control ${error ? "is-invalid" : ""}`}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleClickSave}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className="btn btn-secondary" onClick={handleXmark}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      {error ? <small className="text-danger">{error}</small> : ""}
    </>
  );
}

export default EditBar;
