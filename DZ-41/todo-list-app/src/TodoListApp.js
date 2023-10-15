import "./todo-list-styles.scss";
import React, { useState } from "react";

function TodoListApp(list) {
  const [listToDo, setList] = useState(list.list);

  function handleCheckBoxClick(e) {
    const targetId = e.target.id.split("-").pop();
    const newCheckBoxes = [...listToDo];
    newCheckBoxes[targetId].status = !newCheckBoxes[targetId].status;
    setList(newCheckBoxes);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const taskTitle = e.currentTarget.elements.taskInput.value;
    const duplicate = listToDo.find(function (item) {
      return item.title === taskTitle;
    });

    if (taskTitle && !duplicate) {
      setList(listToDo.concat({ title: taskTitle, status: false }));
    }
  };

  return (
    <div className="todo-list-wrapper">
      <h1 className="todo-list__title">TODO List</h1>
      <ul className="todo-list__list">
        {listToDo.map((element, i) => {
          return (
            <li key={i} className="todo-list__listLi">
              <label name={`task-${i}`} className="todo-list__label">
                {element.title}
                <input type="checkbox" id={`task-${i}`} checked={element.status} onChange={handleCheckBoxClick}></input>
              </label>
            </li>
          );
        })}
      </ul>
      <form id="tskfrom" onSubmit={handleAdd} className="todo-list__form">
        <input type="text" id="taskInput" name="taskInput" className="todo-list__taskInput"></input>
        <button type="submit" className="todo-list__cta">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoListApp;
