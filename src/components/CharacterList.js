import React from "react";

export default function CharacterList({characters}) {
  return (
    <section className="character-list">
      {characters.length !== 0 &&
        <h2>Characters</h2>}
      
    </section>
  );
}
