import React from 'react';
import MiniDrawer from '../../components/Drawer';
import Profile from '../../components/Profile';


const Home = () => {
    return (
        <>
            <MiniDrawer profile={<Profile />} />
        </>
    )
}

export default Home