/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Button, TextField } from "@material-ui/core";
import { TypeForm } from "./interface";
import { useStyles } from "./style";

const FormFields = ({
  handleFormSubmit,
  postPlaylist,
  setPostPlaylist,
}: TypeForm) => {
  const style = useStyles();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPostPlaylist({ ...postPlaylist, [name]: value });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={style.root}
      noValidate
      autoComplete="false"
    >
      <TextField
        name="name"
        value={postPlaylist.name}
        onChange={handleChange}
        label="Input Title"
        color="primary"
        inputProps={{ minLength: 10 }}
      />
      <TextField
        minRows="12"
        label="Input Description"
        color="primary"
        name="description"
        value={postPlaylist.description}
        onChange={handleChange}
        inputProps={{ minLength: 20 }}
      />
      <Button onClick={handleFormSubmit} color="primary" variant="outlined">
        Create
      </Button>
    </form>
  );
};

export default FormFields;
