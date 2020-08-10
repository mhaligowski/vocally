import React from "react";
import "./App.css";

import { PitchDetection } from "./components/PitchDetection";

import clsx from "clsx";

import { getLogger } from "log";
import { Container } from "react-bootstrap";
const LOG = getLogger();

export const App = () => {
  LOG.info("Starting app.");
  return (
    <Container>
      <header className={clsx("text-center", "mt-5")}>
        <h1 className={clsx("display-1", "title")}>vocally</h1>
        <h2>
          sing C<sub>4</sub>!
        </h2>
      </header>

      <main className={clsx("text-center", "py-5")} role="main">
        <PitchDetection />
      </main>

      <footer className={clsx("py-3", "border-top", "text-muted")}>
        <Container>
          <p>vocally.app 2020</p>
        </Container>
      </footer>
    </Container>
  );
};
