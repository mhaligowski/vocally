import React, { useState, useEffect } from "react";

import { Pitch, noteToFreq, note, diff } from "../pitch/notes";
import { PitchGenerator, Sample } from "pitch/pitch";

import { GeneratorComponent } from "./GeneratorComponent";
import { getLogger } from "log";

const LOG = getLogger();

type Recording = Sample[];
type PitchRecorderProps = {
  pitchGenerator?: PitchGenerator;
  timeoutMs: number;
  onFinish: (samples: Recording) => void;
};

export function PitchRecorder({
  pitchGenerator,
  timeoutMs,
  onFinish,
}: PitchRecorderProps) {
  const [recording, setRecording] = useState<Recording>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    LOG.info("Setting up the timeout.");
    const t = setTimeout(() => {
      LOG.debug("Finishing the stream with %d samples.", recording.length);
      setFinished(true);
    }, timeoutMs);

    LOG.info("Set up timer %d for %d ms.", t, timeoutMs);

    return () => {
      LOG.info("Clearing out the timeout %d.", t);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (finished) {
      LOG.info("Finishing recording.");
      onFinish(recording);
    }
  }, [finished, recording]);

  const addSample = (p: Sample) => {
    const newRecording = recording.concat([p]);
    setRecording(newRecording);
    LOG.debug("Recording size: %d", recording.length);
  };

  return pitchGenerator ? (
    <>
      <GeneratorComponent generator={pitchGenerator} onTick={addSample}>
        {(value: Pitch) => <h3>Listening...</h3>}
      </GeneratorComponent>
    </>
  ) : (
    <span>Initializing...</span>
  );
}
