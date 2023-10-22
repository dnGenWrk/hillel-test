import todoAppReducer from "./todoAppReducer";
import editTaskReducer from "./editTaskReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ todolist: todoAppReducer, editState: editTaskReducer });
const store = createStore(rootReducer);

export default store;
