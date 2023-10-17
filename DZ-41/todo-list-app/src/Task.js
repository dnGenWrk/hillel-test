import "./todo-list-styles.scss";
import React, { useState } from "react";

function Task(props) {
  const { id, title, status } = props;
  const [checked, setStatus] = useState(status);

  function handleCheckBoxClick() {
    setStatus((prev) => !prev);
  }

  return (
    <li className="todo-list__listLi">
      <label htmlFor={`task-${id}`} className="todo-list__label">
        {title}
        <input type="checkbox" checked={checked} id={`task-${id}`} name={`task-${id}`} onChange={handleCheckBoxClick}></input>
      </label>
    </li>
  );
}
export default Task;
