import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { LoginSpotify, AccessToken } from "../../utils/credentials";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, User } from "../../redux/AuthSlices";
import { getCurrentPlaylist, profile } from "../../utils/fetching";
import style from "./login.module.css";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = AccessToken(window.location.hash);
      getCurrentPlaylist(access_token).then((data) => console.log(data));
      dispatch(login(access_token));
      profile(access_token).then((data) => dispatch(User(data)));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);
  return (
    <div className={style.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Button  onClick={LoginSpotify} color="primary" variant="contained" size="large">
        Login
      </Button>
    </div>
  );
};

export default Login;
