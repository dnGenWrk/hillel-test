import { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { usersData } from "../App";
import UserAlbums from "../UserAlbums";
function UserDetails() {
  const [showUserAlbums, setshowUserAlbums] = useState(false);
  const dataFromLoader = useLoaderData();
  const currentUserId = Number(dataFromLoader.params.userid.toString().split("=").pop());
  const userInfo = usersData.find((users) => users.id === currentUserId);
  function handleButtonClick() {
    setshowUserAlbums(true);
  }
  if (usersData.length < 1) {
    return <div>Push Users List Button for getting users</div>;
  }
  return (
    <div>
      <h2 className="app-title">{userInfo.username} Details Page</h2>
      <div className="user-info-additions">
        <h4 className="user-info-additions__title">Full Name: {userInfo.name}</h4>
        <ul className="user-info-additions__list">
          <li>email: {userInfo.email} </li>
          <li>
            address: {userInfo.address.city}, {userInfo.address.street}, {userInfo.address.suite}
          </li>
          <li>phone: {userInfo.phone} </li>
          <li>website: {userInfo.website} </li>
        </ul>
      </div>
      <button className="general-button" onClick={handleButtonClick}>
        Show Albums
      </button>
      {showUserAlbums ? <UserAlbums userid={currentUserId} /> : null}
    </div>
  );
}
export default UserDetails;
