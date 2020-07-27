import React, { useState, useEffect } from "react";

import { Pitch, noteToFreq, note, diff } from "../pitch/notes";

import { GeneratorComponent } from "./GeneratorComponent";
import { getLogger } from "log";

const LOG = getLogger();

type PitchValueLineWidgetProps = {
  value?: Pitch;
  reference: Pitch;
};

const print = (n: number): string => {
  return new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 2,
    // @ts-ignore
    signDisplay: "always",
  }).format(n);
};

const PitchValueLabel = ({ reference, value }: PitchValueLineWidgetProps) => {
  if (value === undefined) {
    return <span>nothing...</span>;
  }
  const refDiff = diff(reference.frequency, value.frequency);
  return (
    <span>
      {print(value.frequency)} Hz | {value.target.name}
      <sub>{value.target.octave}</sub> | {print(value.diff)}; {print(refDiff)}
    </span>
  );
};

type Sample = Pitch | undefined;
type PitchGenerator = AsyncGenerator<Sample>;
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
    };
  }, [finished, recording]);

  const referencePitch = note(noteToFreq(60)) as Pitch;
  const addSample = (p: Sample) => {
    const newRecording = recording.concat([p]);
    setRecording(newRecording);
    LOG.debug("Recording size: %d", recording.length);
  };

  return pitchGenerator ? (
    <>
      <h3>Listening...</h3>
      <GeneratorComponent generator={pitchGenerator} onTick={addSample}>
        {(value: Pitch) => (
          <PitchValueLabel reference={referencePitch} value={value} />
        )}
      </GeneratorComponent>
    </>
  ) : (
    <span>Initializing...</span>
  );
}
