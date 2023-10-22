export function generateId() {
  return Math.floor(Math.random() * 100000) + new Date().getMilliseconds() + Math.floor(Math.random() * 1000);
}

export function generateTaskHtml(task) {
  return (
    <div className={`todo-task ${task.done ? "completed" : ""}`} key={generateId()}>
      <button className="task-button" data-taskid={task.id}>
        <div className="task-status-img-container">
          <img src="images/task-done.svg" alt="img" />
        </div>

        <p className="task-button__text">{task.title}</p>
      </button>
      <div className="task-edit-button-container">
        <button className="task-button-control edit-button" data-taskid={task.id}>
          <span className="task-button-control__name">Edit</span> <img src="images/task-edit.svg" alt="img" />
        </button>
      </div>
      <div className="task-remove-button-container">
        <button className="task-button-control" data-taskid={task.id}>
          <span className="task-button-control__name">Remove</span> <img src="images/task-remove.svg" alt="img" />
        </button>
      </div>
    </div>
  );
}
