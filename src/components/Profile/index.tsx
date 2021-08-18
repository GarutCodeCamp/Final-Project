import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { useStyles } from "./style";

const Profile = () => {
  const style = useStyles();
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Link to="/profile" className={style.profile}>
      <Avatar className={style.avatar} src={user?.images[0].url} />
      <Typography className={style.textSize} variant="h6">
        {user?.display_name}
      </Typography>
    </Link>
  );
};

export default Profile;
