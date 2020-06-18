import p5, { AudioIn } from "p5";
import "p5/lib/addons/p5.sound";
import "ml5";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

const sketch = (p: p5) => {
  let pitch: any;
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
  };

  p.draw = async () => {
    if (!pitch) {
      return;
    }
    p.background(255);

    const rp = await pitch.getPitch();
    if (rp) {
      p.stroke(0);
      p.line(0, rp, p.width, rp);
    }
  };
};

new p5(sketch);
