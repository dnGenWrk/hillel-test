import todoAppReducer from "./todoAppReducer";
import editTaskReducer from "./editTaskReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ taskStore: todoAppReducer, editState: editTaskReducer });
const store = createStore(rootReducer);

export default store;
