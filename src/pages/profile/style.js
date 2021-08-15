import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  left: {
    flex: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  right: {
    flex: 0.7,
    background: "#f1f1f1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: "auto",
    marginBottom: "10px",
  },
  info: {
    textAlign: "center",
    lineHeight: "2px",
  },
  textLeft: {
    letterSpacing: "1.8px",
    textAlign: "start",
  },
}));

export default useStyle;
