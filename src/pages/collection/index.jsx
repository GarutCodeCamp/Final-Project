import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  Card  from "../../components/Card/index";
import MiniDrawer from "../../components/Drawer";
import Profile from "../../components/Profile";
import style from "./collect.module.css";

const Collection = () => {
  const playlist = useSelector((state) => state.playlist.items);
  return (
    <>
      <MiniDrawer profile={<Profile />}>
        <div className={style.display_grid}>
          {playlist.map((res) => {
            return (
              <Link className={style.decoration} key={res.id} to={`${res.id}`}>
                <Card images={res?.images[0]?.url} name={res.name} release_date={res.description}/>
              </Link>
            );
          })}
        </div>
      </MiniDrawer>
    </>
  );
};

export default Collection;
