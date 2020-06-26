import p5, { AudioIn } from "p5";
import "p5/lib/addons/p5.sound";

import * as notes from "notes";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

const sketch = (p: p5) => {
  let pitch: any;
  let mic: p5.AudioIn;

  let currentPitch: number = 440;

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
    if (!pitch?.running) {
      return;
    }
    p.fill(0);
    p.stroke(0);

    const rp = await pitch.getPitch();
    const freq: number = rp || currentPitch;

    if (currentPitch) {
      p.background(255);

      const note: number = notes.freqToNote(freq);
      const name: string = notes.noteName(note);
      const refFreq = notes.noteToFreq(note); // Herz value of the given note
      const d: number = notes.diff(freq, refFreq);

      p.textSize(20);
      p.text(`${freq.toFixed(2)} ${name} ${d.toFixed(2)}`, 10, 30);

      // Draw reference line.
      p.color(0, 0, 255);
      p.line(0, currentPitch, p.width, currentPitch);

      p.stroke(196);
      p.line(0, refFreq, p.width, refFreq);
      currentPitch = freq;
    }
  };
};

export { sketch };