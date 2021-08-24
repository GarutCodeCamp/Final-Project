import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./style";
import { Link } from "react-router-dom";
import {
  List,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd";
import HomeIcon from "@material-ui/icons/Home";
import CollectIcon from "@material-ui/icons/Collections";
import clsx from "clsx";
import { Props } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getCurrentPlaylist } from "../../utils/fetching";
import { getPlaylist } from "../../redux/PlaylistSlices";

const MiniDrawer = ({ children, profile, search }: Props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const listItem = [
    {
      name: 'Home',
      icon: <HomeIcon className={classes.icon} />,
      link: '/home'
    },
    {
      name: 'Create Playlist',
      icon: <PlaylistIcon className={classes.icon} />,
      link: '/create-playlist'
    },
    {
      name: 'Your Collection',
      icon: <CollectIcon className={classes.icon} />,
      link: '/collection'
    }
  ]
  const handleDrawerOpen = (): void => {
    setOpen(true);
  };
  const handleDrawerClose = (): void => {
    setOpen(false);
  };
  React.useEffect(() => {
    getCurrentPlaylist(token).then(data => dispatch(getPlaylist(data.items)))
  }, [token, dispatch])
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Spotify Web API
            </Typography>
            {search}
            {profile}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {listItem.map((item, index) => (
            <ListItem button key={index}>
              <Link className={classes.flat} to={item.link}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default MiniDrawer;
