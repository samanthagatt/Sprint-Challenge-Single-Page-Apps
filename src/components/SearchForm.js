import React from "react";
import { TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  searchButton: {
    width: "50%",
    minWidth: 200
  }
});

export default function SearchForm({searchTerm, setSearchTerm}) {
  const classes = useStyles();
  return (
      <form>
          <TextField 
            className={classes.searchButton}  
            label="Search term" 
            variant="outlined" 
            value={searchTerm}
            onChange={
              (e) => setSearchTerm(e.target.value)
            } />
      </form>
  );
}