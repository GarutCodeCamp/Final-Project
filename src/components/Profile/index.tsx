import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      display: "flex",
      alignItems: "center",
      margin: theme.spacing(1, 2),
      justifyContent: 'flex-end',
      flex: 1,
      textDecoration: 'none',
      color: '#212121'
    },
    avatar: {
      marginRight: 5,
    },
    textSize: {
      fontSize: 15,
      color: 'white'
    },
  })
);

const Profile = () => {
  const style = useStyles();
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <Link to="/profile" className={style.profile}>
      <Avatar
        className={style.avatar}
        src={user?.images[0].url}
      />
      <Typography className={style.textSize} variant="h6">
        {user?.display_name}
      </Typography>
    </Link>
  );
};

export default Profile;
