import React, { useState, useEffect } from "react";

import { pitchDetection } from "../pitch/pitch";
import { Pitch } from "../pitch/notes";

import { GeneratorComponent } from "./GeneratorComponent";

type PitchValueLineWidgetProps = {
  value?: Pitch;
};

const PitchValueLineWidget = (props: PitchValueLineWidgetProps) => {
  if (props.value === undefined) {
    return <span />;
  }

  const hertzValue = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 2,
  }).format(props.value.frequency);

  const diffValue = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 2,
    // @ts-ignore
    signDisplay: "always",
  }).format(props.value.diff);

  return (
    <span>
      {hertzValue} Hz; {props.value.target.name}
      <sub>{props.value.target.octave}</sub>; {diffValue}
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
      {(value: Pitch) => <PitchValueLineWidget value={value} />}
    </GeneratorComponent>
  ) : (
    <button onClick={clickHandler}>Start</button>
  );
};
export { PitchDetection };
