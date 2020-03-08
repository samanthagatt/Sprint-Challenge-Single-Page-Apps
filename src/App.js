import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import SearchPage from "./components/SearchPage";

export default function App() {
  return (
    <main className="App" data-testid='app'>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
