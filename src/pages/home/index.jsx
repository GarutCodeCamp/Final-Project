import { Divider, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Card2} from '../../components/Card';
import MiniDrawer from '../../components/Drawer';
import Profile from '../../components/Profile';
import { getNewRelease } from '../../redux/PlaylistSlices';
import { newRelease } from '../../utils/fetching';
import style from "../collection/collect.module.css"

const Home = () => {
    const token = useSelector(state=> state.auth.token);
    const dispatch = useDispatch();
    const release = useSelector(state=> state.playlist.newRelease)
    useEffect(()=>{
        newRelease(token).then(data=> dispatch(getNewRelease(data.albums.items)))
    },[token,dispatch])
    return (
        <>
            <MiniDrawer profile={<Profile />} >
                <Typography color="textSecondary" gutterBottom={true} variant="h4">
                    New Release
                    <Divider />
                </Typography>
                <div className={style.display_grid}>
                {release.map(res=> {
                    return(
                        <Card2 key={res.id} playlist={res} />
                    )
                })}
                </div>
            </MiniDrawer>
        </>
    )
}

export default Home