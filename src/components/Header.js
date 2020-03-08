import React from "react";
import { Link } from "react-router-dom";
import { Typography, ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttonGroup: {
    marginBottom: 15
  }
}))

export default function Header() {
  const classes = useStyles()
  return (
    <header>
      <Typography variant="h3" component="h1" gutterBottom>Rick &amp; Morty Fan Page</Typography>
      <ButtonGroup className={classes.buttonGroup} variant="contained" size="large" component="nav">
          <Button to="/" component={Link}>
            Home
          </Button>
          <Button to="/search" component={Link}>
            Search
          </Button>
      </ButtonGroup>
    </header>
  );
}
