import React, { useState, useEffect } from "react";

import { pitchDetection } from "../pitch/pitch";
import { Pitch, noteToFreq, note, diff } from "../pitch/notes";

import { GeneratorComponent } from "./GeneratorComponent";
import { useTimeout } from "./Timeout";

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

type PitchRecorderProps = {
  onFinish: () => void;
};
export function PitchRecorder({ onFinish }: PitchRecorderProps) {
  const [audioContext, _] = useState(new AudioContext());
  const [stream, setStream] = useState<MediaStream>();

  const referencePitch = note(noteToFreq(60)) as Pitch;

  // Initialize the audio.
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then((stream) => {
        audioContext.createMediaStreamSource(stream);
        audioContext.resume();
        setStream(stream);
        console.log("Initialized audio.");
      });
  }, []);

  const remove = async () => {
    console.log("Finishing the stream.");
    stream?.getTracks().forEach((t) => t.stop());
    audioContext.suspend();

    setStream(undefined);
    onFinish();
  };
  useTimeout(remove, 10000);

  return stream ? (
    <>
      <h3>Listening...</h3>
      <GeneratorComponent generator={pitchDetection(audioContext, stream)}>
        {(value: Pitch) => (
          <PitchValueLabel reference={referencePitch} value={value} />
        )}
      </GeneratorComponent>
    </>
  ) : (
    <span>Initializing...</span>
  );
}
