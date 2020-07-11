import * as React from "react";
import { GeneratorComponent } from "./GeneratorComponent";
import { useState } from "react";
import { pitchDetection } from "./pitch";

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
            {(value: any) => <h1>{value}</h1>}
          </GeneratorComponent>
        ) : (
          <button onClick={clickHandler}>Start</button>
        )}
      </section>
      <footer></footer>
    </div>
  );
};
