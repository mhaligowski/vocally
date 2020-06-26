import p5, { AudioIn } from "p5";
import "p5/lib/addons/p5.sound";
import "ml5";

import * as notes from "notes";

const MODEL_URL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

class Sketch {
  private p?: p5;
  private pitch: any;
  private currentPitch: number = 440;

  setup() {
    if (this.p == undefined) {
      throw "This can't be run without p set up";
    }

    // Prepare Canvas. Chrome needs user action before it's able to start the context.
    // TODO: Size needs to be parameterized. How can p5 change based on the screen size?
    let canvas = this.p.createCanvas(710, 1024);
    canvas.mouseClicked(() => {
      // Enable the AudioContext to bypass the Chrome security.
      let ctx: AudioContext = this.getAudioContext();
      ctx.resume();
    });

    this.p.noFill();

    const mic = new p5.AudioIn();
    mic.start(async (args: any[]) => {
      this.pitch = await ml5.pitchDetection(
        MODEL_URL,
        this.getAudioContext(),
        mic.stream
      );
    });
  }

  async draw() {
    if (this.p == undefined) {
      throw "This can't be run without p set up";
    }

    if (!this.pitch?.running) {
      return;
    }
    this.p.fill(0);
    this.p.stroke(0);

    const rp = await this.pitch.getPitch();
    const freq: number = rp || this.currentPitch;

    this.p.background(255);

    const note: number = notes.freqToNote(freq);
    const name: string = notes.noteName(note);
    const refFreq = notes.noteToFreq(note); // Herz value of the given note
    const d: number = notes.diff(freq, refFreq);

    this.p.textSize(20);
    this.p.text(`${freq.toFixed(2)} ${name} ${d.toFixed(2)}`, 10, 30);

    // Draw reference line.
    this.p.color(0, 0, 255);
    this.p.line(0, this.currentPitch, this.p.width, this.currentPitch);

    this.p.stroke(196);
    this.p.line(0, refFreq, this.p.width, refFreq);
    this.currentPitch = freq;
  }

  run(p: p5) {
    this.p = p;
    p.setup = () => this.setup();
    p.draw = () => this.draw();
  }

  private getAudioContext(): AudioContext {
    // getAudioContext is not defined in p5 types.
    // @ts-ignore
    return this.p?.getAudioContext();
  }
}

export { Sketch };
