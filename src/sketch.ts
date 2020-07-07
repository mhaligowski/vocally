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
  private pitchGenerator?: AsyncGenerator<number, any, number>;
  private ctx: AudioContext = new AudioContext();

  async setup() {
    if (this.p == undefined) {
      throw "This can't be run without p set up";
    }

    // Prepare Canvas. Chrome needs user action before it's able to start the context.
    // TODO: Size needs to be parameterized. How can p5 change based on the screen size?
    let canvas = this.p.createCanvas(800, (2 * range + 1) * bandWidth);
    canvas.mouseClicked(() => {
      // Enable the AudioContext to bypass the Chrome security.
      if (this.ctx.state == "suspended") {
        console.log("Resuming audio context");
        this.ctx.resume();
      }
    });

    this.p.noFill();

    console.log("Creating microphone");
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    this.ctx.createMediaStreamSource(stream);
    this.pitchGenerator = pitchDetection(this.ctx, stream);
  }

  async draw() {
    if (this.p == undefined) {
      throw "This can't be run without p set up";
    }

    if (this.ctx.state != "running") {
      return;
    }

    const rp = await this.pitchGenerator?.next();
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
    this.p.fill(0);
    this.p.stroke(255, 0, 0);
    this.p.strokeWeight(1);
    const lineY = (newNote.note - 21) * bandWidth;
    this.p.line(0, lineY, this.p.width, lineY);

    // Write the note.
    this.p.stroke(0);
    this.p.strokeWeight(0);
    this.p.fill(0);
    this.p.textSize(10);
    this.p.text(
      `${freq.toFixed(2)} ${newNote.target.name}${
        newNote.target.octave
      } ${newNote.diff.toFixed(2)}`,
      80,
      (newNote.note - 21) * bandWidth - 5
    );

    this.p.resetMatrix();
    this.debug(this.p);
    this.currentPitch = freq;
  }

  scale(p: p5, from: number, to: number) {
    p.textSize(10);
    p.fill(0);

    for (let i = from; i <= to; i++) {
      const y = (i - 21) * bandWidth;
      p.strokeWeight(1);
      p.stroke(220);
      p.line(80, y, p.width, y);

      p.strokeWeight(0);
      p.stroke(0);
      p.text(`${name(i)}${octave(i)}`, 0, y);
    }
  }

  debug(p: p5) {
    p.textSize(10);
    p.strokeWeight(1);
    p.fill(255);
    p.color(0);
    p.rect(p.width * 0.5, 20, p.width * 0.5, 55);

    p.fill(0);
    p.strokeWeight(0);
    p.text("debug info", p.width * 0.5 + 10, 45);
  }

  run(p: p5) {
    this.p = p;
    p.setup = () => this.setup();
    p.draw = () => this.draw();
  }
}

export { Sketch };
