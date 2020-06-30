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
const name = (note: number): string => notes[(note - 21) % 12];
const octave = (note: number): number => Math.floor(note / 12 - 1);

const noteToFreq = (note: number): number =>
  440 * Math.pow(2, (note - 69) / 12);

const freqToNote = (freq: number): number => 69 + 12 * Math.log2(freq / 440);

const diff = (a: number, b: number): number => 1200 * Math.log2(b / a);

class Note {
  readonly frequency: number;
  readonly note: number;
  readonly name: string;
  readonly octave: number;

  constructor(private readonly _freq: number) {
    this.note = Math.round(freqToNote(_freq));

    this.frequency = noteToFreq(this.note);
    this.name = name(this.note);
    this.octave = octave(this.note);
  }
}

type Result = {
  target: Note;
  note: number;
  frequency: number;
  diff: number;
};

const note = (freq: number): Result => {
  const n = new Note(freq);
  return {
    frequency: freq,
    target: n,
    note: freqToNote(freq),
    diff: diff(n.frequency, freq),
  };
};

export { name, octave, note };
