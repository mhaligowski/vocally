import p5, { AudioIn } from "p5";
import "p5/lib/addons/p5.sound";

import { note, name, octave } from "notes";
import { pitchDetection } from "./pitch";

const bandWidth: number = 80;
const range: number = 3; // ± halfsteps

class Sketch {
  private p?: p5;
  private currentPitch: number = 440;
  private center: number = 48;
  private pitchGenerator?: Generator<number, any, number>;

  setup() {
    if (this.p == undefined) {
      throw "This can't be run without p set up";
    }

    // Prepare Canvas. Chrome needs user action before it's able to start the context.
    // TODO: Size needs to be parameterized. How can p5 change based on the screen size?
    let canvas = this.p.createCanvas(800, (2 * range + 1) * bandWidth);
    canvas.mouseClicked(() => {
      // Enable the AudioContext to bypass the Chrome security.
      let ctx: AudioContext = this.getAudioContext();
      ctx.resume();
    });

    this.p.noFill();

    const mic = new p5.AudioIn();
    mic.start((args: any[]) => {
      this.pitchGenerator = pitchDetection(this.getAudioContext(), mic.stream);
    });
  }

  async draw() {
    if (this.p == undefined) {
      throw "This can't be run without p set up";
    }

    const rp = this.pitchGenerator?.next();
    if (!rp) {
      return;
    }

    const freq: number = rp.value ?? this.currentPitch;
    const newNote = note(freq);

    // Update the center
    if (rp.value && Math.abs(newNote.target.note - this.center) >= range) {
      this.center = newNote.target.note;
    }

    this.p.fill(0);
    this.p.background(255);
    this.p.translate(
      0,
      -(this.center - range - 21) * bandWidth + bandWidth * 0.5
    );

    this.scale(this.p, this.center - range, this.center + range);

    // Draw the pitch line.
    this.p.stroke(255, 0, 0);
    const lineY = (newNote.note - 21) * bandWidth;
    this.p.line(0, lineY, this.p.width, lineY);

    // Write the note.
    this.p.stroke(0);
    this.p.fill(0);
    this.p.textSize(10);
    this.p.text(
      `${freq.toFixed(2)} ${newNote.target.name}${
        newNote.target.octave
      } ${newNote.diff.toFixed(2)}`,
      10,
      (newNote.note - 21) * bandWidth - 5
    );

    this.currentPitch = freq;
  }

  scale(p: p5, from: number, to: number) {
    p.textSize(10);
    p.stroke(220);

    for (let i = from; i <= to; i++) {
      const y = (i - 21) * bandWidth;
      p.line(80, y, p.width, y);
      p.text(`${name(i)}${octave(i)}`, 0, y);
    }
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
