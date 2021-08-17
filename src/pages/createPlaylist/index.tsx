import React, { useState } from 'react';
import MiniDrawer from '../../components/Drawer'
import Profile from '../../components/Profile';
import Search from '../../components/Search';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import toast,{Toaster} from 'react-hot-toast';
import { addItemToPlaylist, createPlaylist, searchTracks } from "../../utils/fetching";
import { setTracks } from "../../redux/PlaylistSlices";
import useStyles from './style';
import { CircularProgress, Container, Grid, Paper } from '@material-ui/core';
import ListingPlaylist from '../../components/Rowcard/ListingCard';
import FormFields from '../../components/Form';

const CreatePlaylist = () => {
    const [load, setLoad] = useState(false);
    const [selectedTracks, setSelectedTracks] = useState([]);
    const [search, setSearch] = useState('')
    const [postPlaylist, setPostPlaylist] = useState({
        name: "",
        description: "",
        public: false
      });
    
    const getTracks = useSelector((state: RootState) => state.playlist.tracks);
    const token = useSelector((state: RootState) => state.auth.token);
    const userId = useSelector((state: RootState)=> state.auth.user?.id)
    const dispatch = useDispatch();
    const style = useStyles()
    const handleButton = () => {
        setLoad(true);
        if (search === '') {
            toast.error("Search Field Can't Empty")
        } else {
            searchTracks(search, token).then((data) => {
                dispatch(setTracks(data.tracks.items))
                setLoad(false)
            })
            setSearch('')
        }
    }
    const handleFormSubmit = (e: Event):void=>{
        e.preventDefault()
        if(selectedTracks.length <= 0){
            toast.error("cari dulu music kemudian bikin playlist")
        }else{
            createPlaylist(userId, token, postPlaylist).then((newPlaylist)=>
            addItemToPlaylist(newPlaylist.id, token, selectedTracks))
            toast.success("Create Playlist Successfully");
            setPostPlaylist({
                name: "",
                description: "",
                public: false
            })

            setSelectedTracks([])
        }
    }
    
    return (
        <>
            <MiniDrawer
                search={<Search search={search}
                    setSearch={setSearch}
                    handleSearch={handleButton} />}
                profile={<Profile />}>
                <div className={style.root}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Container>
                                <Paper className={style.paper2}>
                                    {load ? (<CircularProgress className={style.loading} color="inherit" />) : (
                                        <ListingPlaylist tracks={getTracks} setSelected={setSelectedTracks} selectedTracks={selectedTracks} />
                                    )}
                                </Paper>
                            </Container>
                        </Grid>
                        <Grid  item xs={4}>
                            <Toaster />
                            <Paper className={style.paper}>
                                <FormFields handleFormSubmit={handleFormSubmit} postPlaylist={postPlaylist} setPostPlaylist={setPostPlaylist} />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </MiniDrawer>
        </>
    )
}

export default CreatePlaylist;