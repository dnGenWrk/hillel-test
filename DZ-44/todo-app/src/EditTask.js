import { useDispatch, useSelector } from "react-redux";
import { COMMANDS } from "./todoAppReducer";
import { EDIT_COMMANDS } from "./editTaskReducer";

export default function EditTask() {
  const state = useSelector((state) => state.todolist);
  const stateEdits = useSelector((state) => state.editState);
  const dispatch = useDispatch();

  function handleEditTask(taskID, title) {
    const newTitle = title;
    const duplicate = state.todoList.find(function (item) {
      return item.title === newTitle;
    });
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
  return (
    <>
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
            <button type="submit" className="tsk-edit-form__save">
              Save
            </button>
            <button
              onClick={() => {
                dispatch({ type: EDIT_COMMANDS.CHANGE_VISIBILITY });
              }}
              className="tsk-edit-form__cancel"
            >
              Cancel
            </button>
          </form>
          {stateEdits.addTaskEditError.show ? (
            <div className="tsk-form-erros">
              <p>{stateEdits.addTaskEditError.message}</p>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
