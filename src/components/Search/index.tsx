import React from "react";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Props } from "./interface";
import { useStyle } from "./style";

const Search = ({ search, setSearch, handleSearch }: Props) => {
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
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <SearchIcon className={style.icon} />
      </Button>
    </div>
  );
};

export default Search;
