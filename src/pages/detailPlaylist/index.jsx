import { Avatar, Container, Divider, Typography } from "@material-ui/core";
import { Timelapse } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MiniDrawer from "../../components/Drawer";
import Profile from "../../components/Profile";
import { getPlaylist } from "../../utils/fetching";
import style from "./detail.module.css";

const DetailPlaylist = () => {
  const [detail, setDetail] = React.useState([]);
  const image = detail.images;
  const item = detail.tracks?.items
  console.log(item);
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  React.useEffect(() => {
    getPlaylist(token, id).then((data) => setDetail(data));
  }, [token]);
  return (
    <>
      <MiniDrawer profile={<Profile />}>
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
            <div className={style.detail_list}>
              <table className={style.table}>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Album</th>
                  <th>Date</th>
                  <th>
                    <Timelapse />
                  </th>
                </tr>
                {item&&item.map((res,idx) => {
                  return (
                    <tr key={res.id} className={style.music}>
                      <td>{idx}</td>
                      <td className={style.setTitle}>
                        <Avatar src={res.track?.album?.images?.[0].url} variant="square" />
                        <div className={style.textTitle}>
                          <h5 className={style.titleH5}>{res.track.name}</h5>
                          <p className={style.titleP}>{res.track.artists?.[0].name}</p>
                        </div>
                      </td>
                      <td>{res.track.album.name}</td>
                      <td>{res.added_at}</td>
                      <td>4:00</td>
                    </tr>
                  );
                })}              
              </table>
            </div>
          </div>
        </Container>
      </MiniDrawer>
    </>
  );
};

export default DetailPlaylist;
