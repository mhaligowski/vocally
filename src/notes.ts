const freqToNote = (freq: number): number =>
  69 + 12 * Math.log2(freq / 440);

const noteToFreq = (note: number): number =>
  440 * Math.pow(2, (note - 69) / 12);

const diff = (a: number, b: number): number => 1200 * Math.log2(b / a);

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

export { freqToNote, noteToFreq, diff, noteName };
