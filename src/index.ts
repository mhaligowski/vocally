import p5 from "p5";
import { Sketch } from "./sketch";

const sketch = new Sketch();
new p5((p: p5) => sketch.run(p));
