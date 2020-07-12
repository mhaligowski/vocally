import React from "react";

import { PitchDetection } from "./components/PitchDetection";

export const App = () => (
  <div>
    <header>
      <h1>Vocally</h1>
    </header>
    <section>
      <PitchDetection />
    </section>
    <footer></footer>
  </div>
);
