import React from "react";
import { Typography } from "@material-ui/core";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Typography variant="h4" component="h2" gutterBottom>Welcome to the ultimate fan site!</Typography>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
