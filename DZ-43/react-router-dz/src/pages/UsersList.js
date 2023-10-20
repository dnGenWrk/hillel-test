import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usersData } from "../App";

function UsersList({ setUsersFromRequest }) {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (!usersData.length) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            console.log("Response status err");
            return;
          }
          return response.json();
        })
        .then((json) => {
          setUsersList(json);
          setUsersFromRequest(json);
        })
        .catch(function (err) {
          console.log(`Fetch error: ${err}`);
        });
    } else {
      setUsersList(usersData);
    }
  }, []);

  return (
    <div>
      <h2 className="app-title">List of Users</h2>

      <ul className="users-list">
        {usersList.map(({ id, username, email }) => (
          <li key={`user-` + id}>
            <Link to={`userdetails/userid=${id}`} className="user-link">
              User Name: {username}, User email: {email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
