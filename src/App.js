import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchForm />
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
