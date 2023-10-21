import { Link } from "react-router-dom";
function Home({ users }) {
  return (
    <div>
      <h2 className="app-title">List of Users</h2>
      <ul className="users-list">
        {users.map(({ id, username, email }) => (
          <li key={`user-` + id}>
            <Link to={`details/${id}`} className="user-link">
              User Name: {username}, User email: {email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
