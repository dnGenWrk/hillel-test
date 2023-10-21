import "./App.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "./api";
import React from "react";

async function loadUserDetails(param) {
  return param;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = getUsers();
    data.then((response) => {
      setUsers(response);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        {
          path: "",
          element: <Home users={users} />,
        },
        {
          path: "details",
          element: <Details users={users} />,
        },
        {
          path: "details/:userid",

          element: <Details users={users} />,
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
