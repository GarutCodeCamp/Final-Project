import React from "react";
import { useSelector } from "react-redux";
import side from "./side.jpg";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyle from "./style";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const style = useStyle();
  return (
    <div className={style.root}>
      <div className={style.left}>
        <img className={style.image} src={side} alt={side} />
      </div>
      <div className={style.right}>
        <Container className={style.info}>
          <Avatar className={style.large} src={user?.images[0].url} />
          <Divider />
          <Grid item xs={12}>
            <Typography variant="h5">{user?.display_name}</Typography>
            <Typography className={style.textLeft} paragraph>
              Country: {user.country}
            </Typography>
            <Typography className={style.textLeft} paragraph>
              Email: {user.email}
            </Typography>
            <Typography className={style.textLeft} paragraph>
              Folowers: {user.followers.total}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                history.push("/home");
              }}
            >
              Back
            </Button>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProfilePage;
