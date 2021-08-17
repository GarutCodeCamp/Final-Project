import React from "react";
import { TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Props } from "./interface";


const useStyle = makeStyles(() =>
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
      color: 'white'
    }
  })
);
const Search = ({search, setSearch, handleSearch }: Props) => {
  const style = useStyle();
  
  return (
    <div className={style.search}>
      <TextField
        className={style.field}
        id="search"
        label="Search Song, Albums, Tracks"
        type="search"
        variant="standard"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <SearchIcon className={style.icon} />
      </Button>
    </div>
  );
};

export default Search;
