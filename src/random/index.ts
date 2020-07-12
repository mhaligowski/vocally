import { sleep } from "../time/sleep";

async function* randomGenerator(): AsyncGenerator<number> {
  while (true) {
    yield Math.random();
    await sleep(3000);
  }
}

export { randomGenerator };
