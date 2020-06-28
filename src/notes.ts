const notes: string[] = [
  "A", // 21
  "B♭", // 22
  "B", // 23
  "C", // 24
  "C♯", // 25
  "D", // 26
  "D♯", // 27
  "E", // 28
  "F", // 29
  "F♯", // 30
  "G", // 31
  "G♯", // 32
];
const noteName = (note: number): string => notes[(note - 21) % 12];

const noteToFreq = (note: number): number =>
  440 * Math.pow(2, (note - 69) / 12);

class Note {
  constructor(private readonly _freq: number) {}

  get frequency(): number {
    return 440 * Math.pow(2, (this.note - 69) / 12);
  }
  get note(): number {
    return Math.round(69 + 12 * Math.log2(this._freq / 440));
  }

  get name(): string {
    return noteName(this.note);
  }

  get octave(): number {
    return Math.floor(this.note / 12 - 1);
  }
}

type Result = {
  target: Note;
  frequency: number;
  diff: number;
};

const freqToNote = (freq: number): number => 69 + 12 * Math.log2(freq / 440);

const diff = (a: number, b: number): number => 1200 * Math.log2(b / a);

const note = (freq: number): Result => {
  const n = new Note(freq);
  return {
    frequency: freq,
    target: n,
    diff: diff(n.frequency, freq),
  };
};

export { freqToNote, noteToFreq, diff, noteName, note };
