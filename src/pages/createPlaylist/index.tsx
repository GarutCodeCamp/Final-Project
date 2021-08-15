import React from 'react';
import MiniDrawer from '../../components/Drawer'
import Profile from '../../components/Profile';
import Search from '../../components/Search';
const CreatePlaylist = () => {
    return (
        <>
            <MiniDrawer search={<Search />} profile={<Profile />}>
                test 123
            </MiniDrawer>
        </>
    )
}

export default CreatePlaylist;