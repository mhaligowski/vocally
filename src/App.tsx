import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import clsx from "clsx";

import getLogger from "log";
import { Container } from "react-bootstrap";
import Hello from "pages/Hello";
import Player from "pages/Player";
import PitchDetection from "./components/PitchDetection";

const LOG = getLogger();

export default () => {
  LOG.info("Starting app.");
  return (
    <Container>
      <header className={clsx("text-center", "mt-5")}>
        <h1 className={clsx("display-1", "text-primary", "title")}>vocally</h1>
        <h2 className="text-secondary">
          sing C<sub>4</sub>!
        </h2>
      </header>

      <main className={clsx("text-center", "py-5")} role="main">
        <Router>
          <Switch>
            <Route path="/detection">
              <PitchDetection />
            </Route>
            <Route path="/player">
              <Player />
            </Route>
            <Route path="/">
              <Hello link="/player" />
            </Route>
          </Switch>
        </Router>
      </main>

      <footer className={clsx("py-3", "border-top", "text-muted")}>
        <Container>
          <p>vocally.app 2020</p>
        </Container>
      </footer>
    </Container>
  );
};
