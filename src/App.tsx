import * as React from "react";
import { GeneratorComponent } from "./GeneratorComponent";
import { useState } from "react";
import { pitchDetection } from "./pitch";
import { note, Pitch } from "./notes";

const sleep = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
};

async function* randomGenerator(): AsyncGenerator<number> {
  yield 1;
  await sleep();
  yield 2;
  await sleep();
  yield 3;
}

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

export const App = () => {
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
  return (
    <div>
      <header>
        <h1>Vocally</h1>
      </header>
      <section>
        {stream ? (
          <GeneratorComponent generator={pitchDetection(audioContext, stream)}>
            {(value: Pitch) => <PitchValueLineWidget value={value} />}
          </GeneratorComponent>
        ) : (
          <button onClick={clickHandler}>Start</button>
        )}
      </section>
      <footer></footer>
    </div>
  );
};