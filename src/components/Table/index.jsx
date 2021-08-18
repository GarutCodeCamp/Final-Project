/* eslint-disable react/prop-types */
import React from "react";
import { Avatar, Button } from "@material-ui/core";
import style from "../../pages/detailPlaylist/detail.module.css";
import { Timelapse } from "@material-ui/icons";
import { addItemToPlaylist } from "../../utils/fetching";
const Table = ({ item, track, token, id }) => {
  const addItem = (uri) => {
    addItemToPlaylist(id, token, uri);
  };
  return (
    <div className={style.detail_list}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Date</th>
            <th>
              <Timelapse />
            </th>
          </tr>
        </thead>
        <tbody>
          {item &&
            item.map((res, idx) => {
              return (
                <tr key={idx} className={style.music}>
                  <td>{idx}</td>
                  <td className={style.setTitle}>
                    <Avatar
                      src={res.track?.album?.images?.[0].url}
                      variant="square"
                    />
                    <div className={style.textTitle}>
                      <h5 className={style.titleH5}>{res.track.name}</h5>
                      <p className={style.titleP}>
                        {res.track.artists?.[0].name}
                      </p>
                    </div>
                  </td>
                  <td>{res.track.album.name}</td>
                  <td>{res.added_at}</td>
                  <td>4:00</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <table className={style.table}>
        <thead>
          <th>Add</th>
        </thead>
        <tbody>
          {track &&
            track.map((res, idx) => {
              return (
                <tr key={idx} className={style.music}>
                  <td>{idx}</td>
                  <td className={style.setTitle}>
                    <Avatar
                      src={res?.album?.images?.[0].url}
                      variant="square"
                    />
                    <div className={style.textTitle}>
                      <h5 className={style.titleH5}>{res.name}</h5>
                      <p className={style.titleP}>
                        {res.album?.artists?.[0].name}
                      </p>
                    </div>
                  </td>
                  <td>{res?.album.name}</td>
                  <td>
                    <Button
                      onClick={() => addItem(res.uri)}
                      color="primary"
                      size="small"
                      variant="contained"
                    >
                      Add
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export { Table };
