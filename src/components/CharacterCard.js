import React from "react";
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'; 

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 345,
    margin: 30
  },
  media: {
    height: 200
  }
});

export default function CharacterCard({character}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={character.image}
        title={`Image of ${character.name}`}
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="h2">
          {character.name}
        </Typography>
      </CardContent>
    </Card>
  )
}
