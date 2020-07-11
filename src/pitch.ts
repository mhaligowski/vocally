import "ml5";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

async function* pitchDetection(
  ctx: AudioContext,
  stream: MediaStream
): AsyncGenerator<number, any, number> {
  const pitchDetection: any = ml5.pitchDetection(MODEL_URL, ctx, stream);
  console.log("Created pitch detection.", pitchDetection);

  await pitchDetection.ready;
  console.log("Initialized the model.");

  while (true) {
    yield pitchDetection.getPitch();
  }
}

export { pitchDetection };
