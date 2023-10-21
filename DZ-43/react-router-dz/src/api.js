export const handleFetchError = function (err) {
  console.log("Fetch error");
  return new Response(
    JSON.stringify({
      code: 400,
      message: "Network Error",
    })
  );
};

export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users").catch(handleFetchError);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
};

export const getUserAlbums = async (userid) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`).catch(handleFetchError);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
};

export const getAlbum = async (albumId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).catch(handleFetchError);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
};

export default getUsers;
