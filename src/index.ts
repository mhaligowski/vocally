import p5, { AudioIn } from "p5";
import "p5/lib/addons/p5.sound";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

const sketch = (p: p5) => {
  let pitch: any;
  let fft: p5.FFT;
  let mic: p5.AudioIn;

  const getAudioContext = (p: p5): AudioContext => {
    // getAudioContext is not defined in p5 types.
    // @ts-ignore
    return p.getAudioContext();
  };

  p.setup = async () => {
    let canvas = p.createCanvas(710, 1024);
    canvas.mouseClicked(() => {
      // Enable the AudioContext to bypass the Chrome security.
      let ctx: AudioContext = getAudioContext(p);
      ctx.resume();
    });

    p.noFill();

    mic = new p5.AudioIn();
    mic.start(async (args: any[]) => {
      pitch = await ml5.pitchDetection(
        MODEL_URL,
        getAudioContext(p),
        mic.stream
      );
    });

    fft = new p5.FFT();
    fft.setInput(mic);
  };

  p.draw = async () => {
    if (!pitch) {
      return;
    }
    p.background(255);

    const rp = await pitch.getPitch();
    if (rp) {
        p.stroke(0)
        p.line(0, rp, p.width, rp);
    }

    let spectrum = fft.analyze();
    p.beginShape();
    p.stroke(200);
    for (let i = 0; i < spectrum.length; i++) {
      p.vertex(p.map(spectrum[i], 0, 255, 0, p.width), i);
    }
    p.endShape();
  };
};
// p
new p5(sketch);
