declare namespace ml5 {
  export function pitchDetection(
    model: string,
    audioContext: AudioContext,
    stream: MediaStream | null,
    callback?: (error: any, result: any) => void
  ): undefined | Promise<any>;
}
