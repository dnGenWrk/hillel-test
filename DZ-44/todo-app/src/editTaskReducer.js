const initState = {
  showEditBlok: false,
  taskid: "",
  addTaskEditError: {
    show: false,
    message: "",
  },
};

export const EDIT_COMMANDS = {
  CHANGE_VISIBILITY: "changevisibility",
  ADD_EDITTASK_ERROR: "addedittaskerror",
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case EDIT_COMMANDS.CHANGE_VISIBILITY:
      return { ...state, showEditBlok: !state.showEditBlok, taskid: action.payload };

    case EDIT_COMMANDS.ADD_EDITTASK_ERROR:
      return { ...state, addTaskEditError: { show: action.payload.show, message: action.payload.message } };

    default:
      return { ...state };
  }
}
