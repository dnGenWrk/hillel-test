import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.scss";
import { COMMANDS } from "./todoAppReducer";
import { EDIT_COMMANDS } from "./editTaskReducer";
import { generateTaskHtml, generateId } from "./helpers";
import "./ToDoTask.scss";

function App() {
  const state = useSelector((state) => state.todolist);
  const stateEdits = useSelector((state) => state.editState);

  console.log("appstate", state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: COMMANDS.GET_TODOLIST });
  }, []);

  function handleAdd(evt) {
    evt.preventDefault();
    const taskTitle = evt.currentTarget.elements.taskInput.value;
    console.log("taskTitle", taskTitle);
    console.log("todoList", state.todoList);
    const duplicate = state.todoList.find(function (item) {
      return item.title === taskTitle;
    });
    if (!taskTitle || !taskTitle.trim().length > 0) {
      dispatch({ type: COMMANDS.ADD_TODOTASK_ERROR, payload: { show: true, message: "Error: Title is Empty" } });
    } else if (duplicate) {
      dispatch({ type: COMMANDS.ADD_TODOTASK_ERROR, payload: { show: true, message: "Error: Already have this task" } });
    } else {
      dispatch({ type: COMMANDS.ADD_TODOTASK_ERROR, payload: { show: false, message: "" } });
      dispatch({ type: COMMANDS.ADD_TODOTASK, payload: { id: generateId(), title: taskTitle, done: false } });
      evt.currentTarget.elements.taskInput.value = "";
    }
  }
  function handleEdit(elementID) {
    console.log(elementID);
    dispatch({ type: EDIT_COMMANDS.CHANGE_VISIBILITY, payload: elementID });
  }

  function handleEditTask(taskID, title) {
    const newTitle = title;
    console.log(`EDIT ${taskID}`, newTitle);
    const duplicate = state.todoList.find(function (item) {
      return item.title === newTitle;
    });
    console.log("Dublicate", duplicate);
    if (!newTitle || !newTitle.trim().length > 0) {
      dispatch({ type: EDIT_COMMANDS.ADD_EDITTASK_ERROR, payload: { show: true, message: "Error: Title is Empty" } });
    } else if (duplicate) {
      dispatch({ type: EDIT_COMMANDS.ADD_EDITTASK_ERROR, payload: { show: true, message: "Error: No cnages detected" } });
    } else {
      dispatch({ type: COMMANDS.EDIT_TODOTASK, payload: { id: taskID, title: newTitle, done: false } });
      dispatch({ type: EDIT_COMMANDS.ADD_EDITTASK_ERROR, payload: { show: false, message: "" } });
      dispatch({ type: EDIT_COMMANDS.CHANGE_VISIBILITY });
    }
  }

  function handleCancel() {
    dispatch({ type: EDIT_COMMANDS.CHANGE_VISIBILITY });
  }
  return (
    <div className="App">
      <div>
        {state.todoList.length > 0 &&
          state.todoList.map((task) => {
            return (
              <div className={`todo-task ${task.done ? "completed" : ""}`} key={generateId()}>
                <button className="task-button" data-taskid={task.id} onClick={() => dispatch({ type: COMMANDS.TOGGLE_TODOTASK_STATUS, payload: task.id })}>
                  <div className="task-status-img-container">
                    <img src="images/task-done.svg" alt="img" />
                  </div>

                  <p className="task-button__text">{task.title}</p>
                </button>
                <div className="task-edit-button-container">
                  <button
                    className="task-button-control edit-button"
                    data-taskid={task.id}
                    onClick={() => {
                      handleEdit(task.id);
                    }}
                  >
                    <span className="task-button-control__name">Edit</span> <img src="images/task-edit.svg" alt="img" />
                  </button>
                </div>
                <div className="task-remove-button-container">
                  <button className="task-button-control" data-taskid={task.id} onClick={() => dispatch({ type: COMMANDS.REMOVE_TODOTASK, payload: task.id })}>
                    <span className="task-button-control__name">Remove</span> <img src="images/task-remove.svg" alt="img" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="add-task">
        <form id="tsk-form" onSubmit={handleAdd} className="todo-list__form">
          <input
            type="text"
            id="taskInput"
            name="taskInput"
            className="todo-list__taskInput"
            onChange={() => {
              dispatch({ type: COMMANDS.ADD_TODOTASK_ERROR, payload: { show: false, message: "" } });
            }}
          ></input>
          <button type="submit" className="todo-list__cta">
            Add Task
          </button>
        </form>
        {state.addTaskError.show ? (
          <div className="tsk-form-erros">
            <p>{state.addTaskError.message}</p>
          </div>
        ) : null}
      </div>
      {stateEdits.showEditBlok && (
        <div className="edit-tasks-block">
          <h4 className="edit-tasks-block__title">Edit Task Information</h4>

          <form
            id="tsk-edit-form"
            onSubmit={(evt) => {
              evt.preventDefault();
              handleEditTask(stateEdits.taskid, evt.currentTarget.elements.taskEditInput.value);
            }}
            className="tsk-edit-form"
          >
            <input
              type="text"
              id="taskEditInput"
              name="taskEditInput"
              className="tsk-edit-form__input"
              onChange={() => {
                dispatch({ type: EDIT_COMMANDS.ADD_EDITTASK_ERROR, payload: { show: false, message: "" } });
              }}
            ></input>
            <button onClick={handleCancel} className="tsk-edit-form__cancel">
              Cancel
            </button>
            <button type="submit" className="tsk-edit-form__save">
              Save
            </button>
          </form>
          {stateEdits.addTaskEditError.show ? (
            <div className="tsk-form-erros">
              <p>{stateEdits.addTaskEditError.message}</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
