import { useState, useEffect } from "react";
import { getUserAlbums, getAlbum } from "./api";

function UserAlbums({ userid }) {
  const [usersAlbums, setUsersAlbums] = useState([]);
  const [album, setAlbom] = useState([]);

  function handleAlbomClick(evt) {
    const albumId = evt.target.dataset.albumid;
    const albumContent = getAlbum(albumId);
    albumContent.then((response) => {
      setAlbom(response);
    });
  }

  useEffect(() => {
    const albumsData = getUserAlbums(userid);
    albumsData.then((response) => {
      setUsersAlbums(response);
    });
  }, [userid]);
  return (
    <div className="app-albums">
      <ul className="users-list">
        {usersAlbums
          ? usersAlbums.map(({ userId, id, title }) => (
              <li key={`user-album` + userId + id}>
                <span className="album-item-title">Album Title: {title}</span>
                <span className="album-item-button">
                  <button onClick={handleAlbomClick} data-albumid={id}>
                    Show Images
                  </button>
                </span>
              </li>
            ))
          : null}
      </ul>
      <div className="album-images">
        {album
          ? album.map((images) => {
              return (
                <div className="image-item" key={`imageid=${images.id}`}>
                  <a href={images.url} target="_blank" rel="noreferrer">
                    <img src={images.thumbnailUrl} alt={images.title}></img>
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default UserAlbums;
