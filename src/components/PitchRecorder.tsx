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
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!started) {
      return;
    }
    LOG.info("Setting up the timeout.");
    const t = setTimeout(() => {
      setFinished(true);
      setStarted(false);
    }, timeoutMs);

    LOG.info("Set up timer %d for %d ms.", t, timeoutMs);

    return () => {
      LOG.info("Clearing out the timeout %d.", t);
      clearTimeout(t);
    };
  }, [started]);

  useEffect(() => {
    if (finished) {
      LOG.info("Finishing recording.");
      onFinish(recording);
    }
  }, [finished, recording]);

  const addSample = (p: Sample) => {
    const newRecording = recording.concat([p]);
    setRecording(newRecording);
    if (!started) {
      setStarted(true);
    }
  };

  const label = !started ? "Waiting..." : "Listening...";

  return pitchGenerator ? (
    <GeneratorComponent generator={pitchGenerator} onTick={addSample}>
      <h3>{label}</h3>
    </GeneratorComponent>
  ) : (
    <span>Waiting...</span>
  );
}
