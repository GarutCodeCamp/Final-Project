import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
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
