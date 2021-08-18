import React from "react";
import { Avatar, Container, Divider, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MiniDrawer from "../../components/Drawer";
import Profile from "../../components/Profile";
import Search from "../../components/Search";
import { getPlaylist, searchTracks } from "../../utils/fetching";
import style from "./detail.module.css";
import { Table } from "../../components/Table";

const DetailPlaylist = () => {
  const [detail, setDetail] = React.useState([]);
  const [track, setTrack] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const image = detail.images;
  const item = detail.tracks?.items;
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const handleButton = () => {
    if (search === "") {
      alert("can't Empty");
    } else {
      searchTracks(search, token).then((data) => {
        setTrack(data.tracks.items);
      });
      setSearch("");
    }
  };
  React.useEffect(() => {
    getPlaylist(token, id).then((data) => setDetail(data));
  }, [token]);
  return (
    <>
      <MiniDrawer
        search={
          <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleButton}
          />
        }
        profile={<Profile />}
      >
        <Container>
          <div className={style.detail}>
            <div className={style.current_detail}>
              <div className={style.current_detail_img}>
                <Avatar
                  variant="square"
                  className={style.img}
                  src={image?.[0]?.url}
                >
                  G
                </Avatar>
              </div>
              <div className={style.detail_info}>
                <p>{detail.type}</p>
                <Typography className={style.title} variant="h3">
                  {detail.name}
                </Typography>
                <Typography paragraph>{detail.description}</Typography>
                <div className={style.user}>
                  <h5>{detail.owner?.display_name}</h5>
                  <p>{detail?.tracks?.total} lagu</p>
                </div>
              </div>
            </div>
            <Divider />
            <Table item={item} id={id} token={token} track={track} />
          </div>
        </Container>
      </MiniDrawer>
    </>
  );
};

export default DetailPlaylist;
