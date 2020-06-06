import p5 from "p5";
import "p5/lib/addons/p5.sound";

const sketch = (p: p5) => {
  let fft: p5.FFT;
  let mic: p5.AudioIn;

  p.setup = () => {
    let canvas = p.createCanvas(710, 1024);
    canvas.mouseClicked(() => {
      // Enable the AudioContext to bypass the Chrome security.
      // AudioContext is not defined in p5 types.
      // @ts-ignore
      let ctx = p.getAudioContext();
      ctx.resume();
    });

    p.noFill();

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    fft.setInput(mic);
  };

  p.draw = () => {
    p.background(255);

    let spectrum = fft.analyze();
    p.beginShape();
    p.stroke(200);
    for (let i = 0; i < spectrum.length; i++) {
      p.vertex(p.map(spectrum[i], 0, 255, 0, p.width), i);
    }
    p.endShape();
  };
};

new p5(sketch);
