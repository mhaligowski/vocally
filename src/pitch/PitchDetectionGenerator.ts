import { Pitch } from "./notes";

interface Controllable {
  start: VoidFunction;
  stop: VoidFunction;
}

export interface PitchDetectionGenerator
  extends Controllable,
    AsyncGenerator<Pitch> {}
