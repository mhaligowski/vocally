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
const octave = (note: number): number => Math.floor(note / 12 - 1);

const noteToFreq = (note: number): number => 440 * 2 ** ((note - 69) / 12);

const freqToNote = (freq: number): number => 69 + 12 * Math.log2(freq / 440);

const diff = (a: number, b: number): number => 1200 * Math.log2(b / a);

class Note {
  readonly frequency: number;

  readonly midiNote: number;

  readonly name: string;

  readonly octave: number;

  constructor(private readonly _freq: number) {
    this.midiNote = Math.round(freqToNote(_freq));

    this.frequency = noteToFreq(this.midiNote);
    this.name = noteName(this.midiNote);
    this.octave = octave(this.midiNote);
  }
}

type Pitch = {
  target: Note;
  midiNote: number;
  frequency: number;
  diff: number;
};

const note = (freq?: number | null): Pitch | null => {
  if (freq === undefined || freq === null) return null;

  const n = new Note(freq);
  return {
    frequency: freq,
    target: n,
    midiNote: freqToNote(freq),
    diff: diff(n.frequency, freq),
  };
};

export { noteName, octave, note, Note, Pitch, freqToNote, noteToFreq, diff };
