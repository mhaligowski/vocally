import "ml5";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

function* pitchDetection(
  ctx: AudioContext,
  stream: MediaStream | null
): Generator<number, any, number> {
  let pitchDetection: any = ml5.pitchDetection(MODEL_URL, ctx, stream);

  let result: number = 0;
  while (true) {
    if (!pitchDetection) continue;
    pitchDetection.getPitch().then((p: number) => (result = p));
    yield result;
  }
}

export { pitchDetection };
