import { note } from "./notes";

it("should give the same note if perfect", () => {
  const freq = 440; // A4

  const result = note(freq);

  expect(result?.frequency).toBe(freq);
  expect(result?.diff).toEqual(0);
  expect(result?.target.frequency).toEqual(440);
  expect(result?.target.name).toEqual("A");
  expect(result?.target.note).toEqual(69); // nice
  expect(result?.target.octave).toEqual(4);
});

it("should find a positive diff if above", () => {
  const freq = 447; // a little above A4
  const result = note(freq);

  expect(result?.frequency).toBe(freq);
  expect(result?.diff).toBeGreaterThan(0);
  expect(result?.target.frequency).toEqual(440);
  expect(result?.target.name).toEqual("A");
  expect(result?.target.note).toEqual(69); // nice
  expect(result?.target.octave).toEqual(4);
});

it("should find a negative diff if above", () => {
  const freq = 435; // a little flatter than A4, not B-flat though
  const result = note(freq);

  expect(result?.frequency).toBe(freq);
  expect(result?.diff).toBeLessThan(0);
  expect(result?.target.frequency).toEqual(440);
  expect(result?.target.name).toEqual("A");
  expect(result?.target.note).toEqual(69); // nice
  expect(result?.target.octave).toEqual(4);
});

it("should give a correct octave for high C", () => {
  const freq = 1046.5; // C6
  const result = note(freq);
  expect(result?.target.octave).toEqual(6);
});

it("should return undefined when the input is null", () => {
  expect(note(null)).toBeUndefined();
});

it("should return undefined when the input is undefined", () => {
  expect(note(undefined)).toBeUndefined();
});
