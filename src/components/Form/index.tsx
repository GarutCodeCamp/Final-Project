/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
)
interface TypeForm {
    handleFormSubmit: any;
    postPlaylist: any;
    setPostPlaylist: any;
}

const FormFields = ({handleFormSubmit, postPlaylist,setPostPlaylist}: TypeForm) => {
    const style = useStyles();
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setPostPlaylist({ ...postPlaylist, [name]: value });
      };
    
    return (
        <form onSubmit={handleFormSubmit} className={style.root} noValidate autoComplete="false">
            <TextField
                name="name"
                value={postPlaylist.name} onChange={handleChange}  label="Input Title" color="secondary" />
            <TextField 
                label="Input Description"
                variant="outlined"
                color="secondary"
                name="description"
                value={postPlaylist.description} onChange={handleChange}
                />
            <Button onClick={handleFormSubmit} color="primary" variant="outlined" >Create</Button>
        </form>
    )
}

export default FormFields;