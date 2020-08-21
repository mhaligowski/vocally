import 'ml5';

import { note, Pitch } from 'pitch/notes';
import getLogger from 'log';

const LOG = getLogger();

export type Sample = Pitch | null;
export type Recording = Sample[];

type PitchGenerator = AsyncGenerator<Sample>;

const MODEL_URL = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

async function* ml5PitchDetection(
  ctx: AudioContext,
  stream: MediaStream,
): PitchGenerator {
  const pitchDetection: any = ml5.pitchDetection(MODEL_URL, ctx, stream);
  LOG.info('Created pitch detection.', pitchDetection);

  await pitchDetection.ready;
  LOG.info('Initialized the model.');

  while (stream.active && ctx.state === 'running') {
    // This is fine as this is a generator code.
    // eslint-disable-next-line no-await-in-loop
    const pitch = await pitchDetection.getPitch();
    if (pitch === null) {
      LOG.debug('Skipping');
    } else {
      yield note(pitch);
    }
  }
}

export { PitchGenerator, ml5PitchDetection };
