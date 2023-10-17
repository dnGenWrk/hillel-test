import "./todo-list-styles.scss";
import React, { useState } from "react";
import Task from "./Task";
function TodoListApp(props) {
  const [listToDo, setToDoList] = useState(props.list);

  function handleAdd(evt) {
    evt.preventDefault();
    const taskTitle = evt.currentTarget.elements.taskInput.value;
    const duplicate = listToDo.find(function (item) {
      return item.title === taskTitle;
    });
    if (taskTitle && !duplicate) {
      setToDoList((prev) => {
        return [...prev, { id: listToDo.length + 1, title: taskTitle, status: false }];
      });
    }
  }
  return (
    <div className="todo-list-wrapper">
      <h1 className="todo-list__title">TODO List</h1>
      <ul className="todo-list__list">
        {listToDo.map((task) => {
          return <Task {...task} key={task.id} />;
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
