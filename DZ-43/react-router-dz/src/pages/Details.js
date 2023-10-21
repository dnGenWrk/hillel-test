import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserAlbums from "../UserAlbums";

function Details({ users }) {
  const dataFromLoader = useLoaderData();
  const [userInfo, setUserInfo] = useState({});
  const [showUserAlbums, setshowUserAlbums] = useState(false);

  const usersRes = new Promise((resolve) => {
    resolve(users);
  });
  usersRes.then((val) => {
    const currentUserId = dataFromLoader.params.userid;

    setUserInfo(val.find((user) => user.id === Number(currentUserId)));
  });

  function handleButtonClick() {
    setshowUserAlbums(true);
  }

  return (
    <div>
      {userInfo ? (
        <div>
          <h2 className="app-title">{userInfo.username} Details Page</h2>
          <div className="user-info-additions">
            <h4 className="user-info-additions__title">Full Name: {userInfo.name}</h4>
            <ul className="user-info-additions__list">
              <li>email: {userInfo.email}</li>
              <li>phone: {userInfo.phone}</li>
              <li>website: {userInfo.website}</li>
            </ul>
          </div>
          <button className="general-button" onClick={handleButtonClick}>
            Show Albums
          </button>
        </div>
      ) : null}
      {showUserAlbums ? <UserAlbums userid={userInfo.id} /> : null}
    </div>
  );
}
export default Details;
