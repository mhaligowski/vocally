import "ml5";

import { note, Pitch } from "pitch/notes";
import getLogger from "log";

const LOG = getLogger();

export type Sample = Pitch | null;
export type Recording = Sample[];

type PitchGenerator = AsyncGenerator<Sample>;

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

async function* ml5PitchDetection(
  ctx: AudioContext,
  stream: MediaStream
): PitchGenerator {
  LOG.info("Initializing the model.");
  stream.getAudioTracks().forEach((t) => {
    t.enabled = true; // eslint-disable-line no-param-reassign
  });
  const pitchDetection: any = await ml5.pitchDetection(MODEL_URL, ctx, stream);
  await pitchDetection.ready;

  LOG.info("Starting event loop, %j", pitchDetection);
  while (stream.active && ctx.state === "running") {
    // This is fine as this is a generator code.
    // eslint-disable-next-line no-await-in-loop
    const pitch = await pitchDetection.getPitch();
    if (pitch === null) {
      LOG.debug("No pitch detected.");
    } else {
      yield note(pitch);
    }
  }
}

export { PitchGenerator, ml5PitchDetection };
