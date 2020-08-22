import sleep from "../time/sleep";

async function* randomGenerator(): AsyncGenerator<number> {
  while (true) {
    yield Math.random();
    sleep(3000).then(() => {});
  }
}

export default randomGenerator;
