const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

const profile = (token) =>
  fetch(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export { profile };
