import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="todo-app">
      <header className="todo-app__header">
        <div className="container">
          <h1 className="todo-app__title">ToDo App</h1>
        </div>
      </header>
      <main className="todo-app__content">
        <div className="container">
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      </main>
      <footer className="todo-app__footer">
        <div className="container">
          <p className="todo-app__footnote">Todo app v.2</p>
        </div>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
