/* eslint-disable import/prefer-default-export */
declare namespace ml5 {
  export function pitchDetection(
    model: string,
    audioContext: AudioContext,
    stream: MediaStream | null,
    callback?: (error: any, result: any) => void
  ): Promise<any> | undefined;
}

declare module "logrocket-react";
declare module "*.ogg";
