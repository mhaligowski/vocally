import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { PitchDetection } from "./components/PitchDetection";
import { Container } from "react-bootstrap";

export const App = () => (
  <Container>
    <header>
      <h1 className="display-1 text-center mt-5">vocally</h1>
      <h1 className="text-center">sing C4!</h1>
    </header>

    <section className="text-center">
      <PitchDetection />
    </section>

    <footer></footer>
  </Container>
);
