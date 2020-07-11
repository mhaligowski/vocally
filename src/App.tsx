import * as React from "react";
import { GeneratorComponent } from "./GeneratorComponent";

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

export const App = () => (
  <div>
    <header>
      <h1>Vocally</h1>
    </header>
    <section>
      <GeneratorComponent generator={randomGenerator()}>
        {(value: any) => <h1>{value}</h1>}
      </GeneratorComponent>
    </section>
    <footer></footer>
  </div>
);
