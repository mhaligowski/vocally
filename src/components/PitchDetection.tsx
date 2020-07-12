import React, { useState } from "react";

import { pitchDetection } from "../pitch/pitch";
import { Pitch, noteToFreq, note, diff } from "../pitch/notes";

import { GeneratorComponent } from "./GeneratorComponent";

type PitchValueLineWidgetProps = {
  value?: Pitch;
  reference?: Pitch;
};

const print = (n: number): string => {
  return new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 2,
    // @ts-ignore
    signDisplay: "always",
  }).format(n);
}

const PitchValueLineWidget = (props: PitchValueLineWidgetProps) => {
  if (props.value === undefined || props.reference === undefined) {
    return <span />;
  }

  const hertzValue = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 2,
  }).format(props.value.frequency);

  const refDiff = diff(props.reference.frequency, props.value.frequency);
  return (
    <span>
      {hertzValue} Hz; {props.value.target.name}
      <sub>{props.value.target.octave}</sub>; {print(props.value.diff)}; {print(refDiff)}
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

  return stream ? (
    <GeneratorComponent generator={pitchDetection(audioContext, stream)}>
      {(value: Pitch) => (
        <PitchValueLineWidget reference={note(noteToFreq(60))} value={value} />
      )}
    </GeneratorComponent>
  ) : (
    <button onClick={clickHandler}>Start</button>
  );
};

export { PitchDetection };
