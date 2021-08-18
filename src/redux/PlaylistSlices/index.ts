import { createSlice } from "@reduxjs/toolkit";
import { PlaylistState } from "../../Interfaces";

const initialState: PlaylistState = {
  tracks: [],
  SelectTrack: [],
  items: [],
  newRelease: [],
  featurePlaylist: []
};

const Playlist = createSlice({
  name: "Playlist",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    getPlaylist: (state, action) => {
      state.items = action.payload;
    },
    getNewRelease: (state, action) => {
      state.newRelease = action.payload;
    },
    featurePlaylist: (state, action)=> {
      state.featurePlaylist = action.payload
    },
    clearState: () => initialState,
  },
});

export const { setTracks, getPlaylist, getNewRelease,featurePlaylist } = Playlist.actions;
export default Playlist.reducer;
