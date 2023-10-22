const initState = {
  todoList: [
    { id: 1, title: "Go to shop", done: false },
    { id: 2, title: "Make job", done: true },
  ],
  newText: "",
  currentTask: "",
  addTaskError: {
    show: false,
    message: "",
  },
};

export const COMMANDS = {
  GET_TODOLIST: "gettodolist",
  SET_TODOLIST: "settodolist",
  ADD_TODOTASK: "addtodotask",
  REMOVE_TODOTASK: "removetodotask",
  EDIT_TODOTASK: "edittodotask",
  TOGGLE_TODOTASK_STATUS: "toggletodotaskstatus",
  ADD_TODOTASK_ERROR: "addtodotaskerror",
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case COMMANDS.SET_TODOLIST:
      return { ...state, todoList: [action.payload] };

    case COMMANDS.GET_TODOLIST:
      return { ...state };

    case COMMANDS.REMOVE_TODOTASK:
      console.log("state.todoList", state.todoList);
      const newTasksWithoutRemovedElement = state.todoList.filter((element) => +element.id !== +action.payload);
      console.log("NEW TASK LIST 2", newTasksWithoutRemovedElement);
      console.log("action.payload", action.payload);
      return { ...state, todoList: newTasksWithoutRemovedElement };

    case COMMANDS.ADD_TODOTASK:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case COMMANDS.TOGGLE_TODOTASK_STATUS:
      const newTasksList = [...state.todoList];
      const listToBeChanged = newTasksList.find((el) => el.id === action.payload);
      listToBeChanged.done = !listToBeChanged.done;
      return { ...state, todoList: newTasksList };

    case COMMANDS.EDIT_TODOTASK:
      const newEditedTasksList = [...state.todoList];
      const taskForEdit = newEditedTasksList.find((el) => el.id === action.payload.id);
      taskForEdit.done = !taskForEdit.done;
      taskForEdit.title = action.payload.title;
      return { ...state, todoList: newEditedTasksList };

    case COMMANDS.ADD_TODOTASK_ERROR:
      return { ...state, addTaskError: { show: action.payload.show, message: action.payload.message } };

    default:
      return { ...state };
  }
}
