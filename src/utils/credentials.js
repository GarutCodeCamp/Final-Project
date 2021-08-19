const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const SPOTIFY_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const SCOPE = [
  "playlist-modify-private",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
];
const LoginSpotify = () => {
  window.location = `${SPOTIFY_AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000&scope=${SCOPE}&response_type=token&show_dialog=true`;
};

const AccessToken = (hash) => {
  const tagToken = hash.substring(1);
  const paramUrl = tagToken.split("&");
  const paramSplit = paramUrl.reduce((acc, currentValue) => {
    const [key, val] = currentValue.split("=");
    acc[key] = val;
    return acc;
  }, {});
  return paramSplit;
};

export { LoginSpotify, AccessToken };
