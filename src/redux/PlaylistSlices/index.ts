import { createSlice } from "@reduxjs/toolkit";
import { PlaylistState } from "../../Interfaces";

const initialState: PlaylistState = {
    tracks: [],
    SelectTrack: [],
    form: {
        title: '',
        description: '',
    },
    items: [],
    newRelease: []
}

const Playlist = createSlice({
    name: 'Playlist',
    initialState,
    reducers: {
        setTracks: (state, action) => {
            state.tracks = action.payload
        },
        addTrack: (state, action)=> {
            state.SelectTrack.push(action.payload)
        },
        getPlaylist: (state, action)=> {
            state.items = action.payload
        },
        getNewRelease: (state, action) => {
            state.newRelease = action.payload
        },
        clearState: () =>initialState
    }
})


export const {setTracks,getPlaylist,getNewRelease} = Playlist.actions
export default Playlist.reducer