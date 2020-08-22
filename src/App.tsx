import React from "react";
import "./App.css";

import clsx from "clsx";

import getLogger from "log";
import { Container } from "react-bootstrap";
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
