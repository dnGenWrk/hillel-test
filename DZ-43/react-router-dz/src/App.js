import "./App.scss";
import UsersList from "./pages/UsersList";
import UsersDetails from "./pages/UserDetails";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import { createContext } from "react";

export let usersData = [];

async function loadUserDetails(param) {
  return param;
}

export const UsersDetailsContext = createContext(null);

function App() {
  function setUsersFromRequest(users) {
    usersData = users;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        {
          path: "",
          element: <UsersList setUsersFromRequest={setUsersFromRequest} />,
        },
        {
          path: "userdetails",
          element: <UsersDetails />,
        },
        {
          path: "userdetails/:userid",

          element: <UsersDetails />,
          loader: loadUserDetails,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
