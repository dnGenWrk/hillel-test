import { useDispatch, useSelector } from "react-redux";
import { COMMANDS } from "./todoAppReducer";
import { generateId } from "./helpers";

export default function AddTask() {
  const state = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  function handleAdd(evt) {
    evt.preventDefault();
    const taskTitle = evt.currentTarget.elements.taskInput.value;
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

  return (
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
  );
}
