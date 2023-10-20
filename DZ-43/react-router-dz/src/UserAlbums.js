import { useState, useEffect } from "react";

function UserAlbums({ userid }) {
  const [usersAlbums, setUsersAlbums] = useState([]);
  const [album, setAlbom] = useState([]);

  function handleAlbomClick(evt) {
    const albumId = evt.target.dataset.albumid;
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        if (!response.ok) {
          console.log("Response status err");
          return;
        }
        return response.json();
      })
      .then((json) => {
        setAlbom(json);
      })
      .catch(function (err) {
        console.log(`Fetch error: ${err}`);
      });
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`)
      .then((response) => {
        if (!response.ok) {
          console.log("Response status err");
          return;
        }
        return response.json();
      })
      .then((json) => {
        setUsersAlbums(json);
      })
      .catch(function (err) {
        console.log(`Fetch error: ${err}`);
      });
  }, []);
  return (
    <div className="app-albums">
      <ul className="users-list">
        {usersAlbums.map(({ userId, id, title }) => (
          <li key={`user-album` + userId + id}>
            <span className="album-item-title">Album Title: {title}</span>
            <span className="album-item-button">
              <button onClick={handleAlbomClick} data-albumid={id}>
                Show Images
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="album-images">
        {album.map((images) => {
          return (
            <div className="image-item" key={`imageid=${images.id}`}>
              <a href={images.url} target="_blank">
                <img src={images.thumbnailUrl} title={images.title}></img>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserAlbums;
