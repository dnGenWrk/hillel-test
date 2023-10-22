import { useDispatch } from "react-redux";
import { COMMANDS } from "./todoAppReducer";
import { EDIT_COMMANDS } from "./editTaskReducer";
import { generateId } from "./helpers";

export default function TaskTodo({ done, id, title }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-task ${done ? "completed" : ""}`}>
      <button className="task-button" onClick={() => dispatch({ type: COMMANDS.TOGGLE_TODOTASK_STATUS, payload: id })}>
        <div className="task-status-img-container">
          <img src="images/task-done.svg" alt="img" />
        </div>

        <p className="task-button__text">{title}</p>
      </button>
      <div className="task-edit-button-container">
        <button
          className="task-button-control edit-button"
          onClick={() => {
            dispatch({ type: EDIT_COMMANDS.CHANGE_VISIBILITY, payload: id });
          }}
        >
          <span className="task-button-control__name">Edit</span> <img src="images/task-edit.svg" alt="img" />
        </button>
      </div>
      <div className="task-remove-button-container">
        <button className="task-button-control" onClick={() => dispatch({ type: COMMANDS.REMOVE_TODOTASK, payload: id })}>
          <span className="task-button-control__name">Remove</span> <img src="images/task-remove.svg" alt="img" />
        </button>
      </div>
    </div>
  );
}
