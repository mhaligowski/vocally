import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { PitchDetection } from "./components/PitchDetection";

export const App = () => (
  <div>
    <header>
      <h1>Vocally</h1>
      <h2>Sing C4!</h2>
    </header>
    <section>
      <PitchDetection />
    </section>
    <footer></footer>
  </div>
);
