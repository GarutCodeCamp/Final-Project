import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles(() =>
  createStyles({
    search: {
      width: "200px",
      display: "flex",
      flex: 3,
      justifyContent: "center",
    },
    field: {
      width: "60%",
    },
    icon: {
      color: "white",
    },
  })
);
