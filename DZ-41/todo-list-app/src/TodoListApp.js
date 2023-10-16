import "./todo-list-styles.scss";
import React, { useState } from "react";

function TodoListApp(props) {
  const [listToDo, setList] = useState(props.list);

  function handleCheckBoxClick(id) {
    const newCheckBoxes = listToDo.map((el) => {
      if (el.id === id) {
        el.status = !el.status;
      }
      return el;
    });

    setList(newCheckBoxes);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const taskTitle = e.currentTarget.elements.taskInput.value;
    const duplicate = listToDo.find(function (item) {
      return item.title === taskTitle;
    });

    if (taskTitle && !duplicate) {
      setList(listToDo.concat({ id: listToDo.length + 1, title: taskTitle, status: false }));
    }
  };

  return (
    <div className="todo-list-wrapper">
      <h1 className="todo-list__title">TODO List</h1>
      <ul className="todo-list__list">
        {listToDo.map((element) => {
          return (
            <li key={element.id} className="todo-list__listLi">
              <label name={`task-${element.id}`} className="todo-list__label">
                {element.title}
                <input
                  type="checkbox"
                  id={`task-${element.id}`}
                  checked={element.status}
                  onChange={() => {
                    handleCheckBoxClick(element.id);
                  }}
                ></input>
              </label>
            </li>
          );
        })}
      </ul>
      <form id="tsk-form" onSubmit={handleAdd} className="todo-list__form">
        <input type="text" id="taskInput" name="taskInput" className="todo-list__taskInput"></input>
        <button type="submit" className="todo-list__cta">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoListApp;
