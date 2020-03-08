import React from "react";
import CharacterCard from "./CharacterCard";
import { Grid } from "@material-ui/core"

export default function CharacterList({characters}) {
  return (
    <Grid container justify="center" alignItems="center">
      {characters.map(character => 
        <Grid item
          component={CharacterCard}
          character={character} 
          key={character.id} />
      )}
    </Grid>
  );
}
