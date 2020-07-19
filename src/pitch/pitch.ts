import "ml5";
import { note, Pitch } from "./notes";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

async function* pitchDetection(
  ctx: AudioContext,
  stream: MediaStream
): AsyncGenerator<Pitch | undefined, any, any> {
  let started = false;
  const pitchDetection: any = ml5.pitchDetection(MODEL_URL, ctx, stream);
  console.log("Created pitch detection.", pitchDetection);

  await pitchDetection.ready;
  console.log("Initialized the model.");

  while (true) {
    if (!stream.active) return;

    const pitch = await pitchDetection.getPitch();
    if (!started) {
      console.log("Got first detection", pitch);
      started = true;
    }
    yield note(pitch);
  }
}

export { pitchDetection };
