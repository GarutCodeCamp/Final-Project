import { Divider, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/index";
import MiniDrawer from "../../components/Drawer";
import Profile from "../../components/Profile";
import { featurePlaylist, getNewRelease } from "../../redux/PlaylistSlices";
import { featuredPlaylist, newRelease } from "../../utils/fetching";
import style from "../collection/collect.module.css";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const release = useSelector((state) => state.playlist.newRelease);
  const feature = useSelector((state) => state.playlist.featurePlaylist);

  React.useEffect(() => {
    newRelease(token).then((data) =>
      dispatch(getNewRelease(data.albums.items))
    );
    featuredPlaylist(token).then((data) => dispatch(featurePlaylist(data)));
  }, [token, dispatch]);
  return (
    <>
      <MiniDrawer profile={<Profile />}>
        <Typography color="textSecondary" gutterBottom={true} variant="h4">
          New Release
          <Divider />
        </Typography>
        <div className={style.display_grid}>
          {release.map((res) => {
            return (
              <Card
                key={res.id}
                images={res?.images[0].url}
                name={res.name}
                release_date={res.release_date}
                release_date_precision={res.release_date_precision}
              />
            );
          })}
        </div>
        <Typography color="textSecondary" gutterBottom={true} variant="h4">
          {feature.message}
          <Divider />
        </Typography>
        <div className={style.display_grid}>
          {feature.playlists?.items &&
            feature.playlists?.items.map((res) => {
              return (
                <Card
                  key={res.id}
                  images={res?.images[0].url}
                  name={res?.name}
                  release_date={res.description}
                  release_date_precision={res.type}
                />
              );
            })}
        </div>
      </MiniDrawer>
    </>
  );
};

export default Home;
