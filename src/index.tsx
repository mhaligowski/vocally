import p5 from "p5";
import { Sketch } from "./sketch";


import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

const sketch = new Sketch();
new p5((p: p5) => sketch.run(p));

ReactDOM.render(<App />, document.getElementById("app"));
