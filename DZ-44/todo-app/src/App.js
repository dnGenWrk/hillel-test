import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { COMMANDS } from "./todoAppReducer";
import { generateId } from "./helpers";
import TaskTodo from "./TaskTodo";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import "./ToDoTask.scss";
import "./App.scss";

function App() {
  const state = useSelector((state) => state.taskStore.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: COMMANDS.GET_TODOLIST });
  }, []);

  return (
    <div className="App">
      <div>{state.length > 0 && state.map((task) => <TaskTodo {...task} key={generateId()} />)}</div>
      <AddTask />
      <EditTask />
    </div>
  );
}

export default App;
