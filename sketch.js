let mic, fft;

let ready = false;

function setup() {
  let canvas = createCanvas(710, 400);
  canvas.mousePressed(() => {
    ready = true;
    console.log(" dupa");
  });
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);
  if (!ready) {
    return;
  }

  let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}

function mousePressed() {
  getAudioContext().resume();
}