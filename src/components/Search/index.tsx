import React from "react";
import { TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles(() =>
  createStyles({
    search: {
      width: "200px",
      display: "flex",
      flex: 2,
      justifyContent: "center",
    },
    field: {
      width: "60%",
    },
  })
);
const Search = () => {
  const style = useStyle();
  return (
    <div className={style.search}>
      <TextField
        className={style.field}
        id="filled-search"
        label="Search Song, Albums, Tracks"
        type="search"
        variant="standard"
      />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
