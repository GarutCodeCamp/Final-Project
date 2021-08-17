const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

const profile = (token) =>
  fetch(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

const searchTracks = (search, token) =>
  fetch(`${SPOTIFY_ENDPOINT}/search?q=${search}&type=track&limit=12`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

const createPlaylist = (userId, token, newPlaylist) =>
  fetch(`${SPOTIFY_ENDPOINT}/users/${userId}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: newPlaylist.name,
      description: newPlaylist.description,
      public: false,
      collaborative: false,
    }),
  }).then((res) => res.json());

const addItemToPlaylist = (playlistId, token, playlist) =>
  fetch(
    `${SPOTIFY_ENDPOINT}/playlists/${playlistId}/tracks?postion=0&uris=${playlist}`,
    {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        uris: playlist,
        position: 0,
      }),
    }
  ).then((res) => res.json());

const getCurrentPlaylist = (token) =>
  fetch(`${SPOTIFY_ENDPOINT}/me/playlists?limit=20`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

const newRelease = (token) =>
  fetch(`${SPOTIFY_ENDPOINT}/browse/new-releases?limit=9`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

const getPlaylist = (token, playlist_id) =>
  fetch(`${SPOTIFY_ENDPOINT}/playlists/${playlist_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export {
  profile,
  searchTracks,
  createPlaylist,
  addItemToPlaylist,
  getCurrentPlaylist,
  newRelease,
  getPlaylist,
};
