import React, { useState } from "react";

import { pitchDetection } from "../pitch/pitch";
import { Pitch, noteToFreq, note, diff } from "../pitch/notes";

import { GeneratorComponent } from "./GeneratorComponent";
import { Timeout, useTimeout } from "./Timeout";
import { Button } from "react-bootstrap";

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

const PitchValueLineWidget = ({
  reference,
  value,
}: PitchValueLineWidgetProps) => {
  if (value === undefined) {
    return <span />;
  }
  const hertzValue = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 2,
  }).format(value.frequency);

  const refDiff = diff(reference.frequency, value.frequency);

  return (
    <span>
      {hertzValue} Hz; {value.target.name}
      <sub>{value.target.octave}</sub>; {print(value.diff)}; {print(refDiff)}
    </span>
  );
};

const PitchDetection = () => {
  const [audioContext, _] = useState(new AudioContext());
  const [stream, setStream] = useState<MediaStream>();

  const clickHandler = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    audioContext.createMediaStreamSource(stream);
    audioContext.resume();
    setStream(stream);
  };

  const remove = async () => {
    console.log("Finishing the stream.");
    stream?.getTracks().forEach((t) => t.stop());

    setStream(undefined);
    audioContext.suspend();
  };
  useTimeout(remove, 10000);

  const referencePitch = note(noteToFreq(60)) as Pitch;
  return stream ? (
    <GeneratorComponent generator={pitchDetection(audioContext, stream)}>
      {(value: Pitch) => (
        <PitchValueLineWidget reference={referencePitch} value={value} />
      )}
    </GeneratorComponent>
  ) : (
    <Button onClick={clickHandler} variant="outline-primary" size="lg">
      Start
    </Button>
  );
};

export { PitchDetection };
