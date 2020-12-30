import React, { useState, useEffect } from "react";
import getLogger, { useLogger } from "log";
import * as Sentry from "@sentry/react";

import { ml5PitchDetection, PitchGenerator, Recording } from "pitch/pitch";
import { Pitch, note, noteToFreq } from "pitch/notes";

import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import PitchRecorder from "../components/PitchRecorder";

const LOG = getLogger();

type DetectionProps = {
  next: string;
};

function useMicrophone() {
  const [stream, setStream] = useState<MediaStream>();
  const logger = useLogger();

  // Set up the microphone. Do it once, so [] dependency.
  useEffect(() => {
    logger.info("Acquiring microphone.");
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then((newStream) => {
        logger.debug(
          "Microphone initialized with stream: %j, active?, %s, state: %s.",
          newStream,
          newStream.active,
          newStream.getAudioTracks()[0].readyState
        );
        newStream.getAudioTracks()[0].stop();
        setStream(newStream);
      });
  }, []);

  return stream;
}

const Detection = ({ next: path }: DetectionProps) => {
  LOG.info("[Widget] Recorder");
  Sentry.useProfiler("PitchDetection");

  // webkit vs all the others
  // @ts-ignore
  const AudioCtx = window.AudioContext || window.webkitAudioContext;

  // Audio interfaces
  const [audioContext] = useState(new AudioCtx()); // read-only
  const [
    pitchDetectionGenerator,
    setPitchDetectionGenerator,
  ] = useState<PitchGenerator>();
  const [recording, setRecording] = useState<Recording>();

  // Set up the microphone. Do it once, so [] dependency.
  const stream = useMicrophone();

  // Configure the audio stream.
  useEffect(() => {
    if (stream === undefined) {
      return () => {};
    }

    LOG.info(
      "Setting up the context in state %j and stream %j",
      audioContext.state,
      stream.id
    );
    const node = audioContext.createMediaStreamSource(stream);

    LOG.info("Media stream source created.", node);
    setPitchDetectionGenerator(ml5PitchDetection(audioContext, stream));
    audioContext.resume();

    return () => {
      LOG.info("Cleanup the audio settings");
      LOG.debug("Stop all tracks in the stream %j.", stream);
      stream?.getTracks().forEach((t) => t.stop());

      LOG.debug("Suspend audio context %j.", audioContext);
      audioContext.suspend();
    };
  }, [stream]);

  // Finished recording.
  if (recording !== undefined) {
    const referencePitch = note(noteToFreq(60)) as Pitch;
    return (
      <Redirect
        to={{
          pathname: path,
          state: { recording, reference: referencePitch },
        }}
      />
    );
  }

  // recording is set up.
  if (pitchDetectionGenerator) {
    LOG.info(pitchDetectionGenerator);
    return (
      <PitchRecorder
        onFinish={(result) => {
          setRecording(result);
        }}
        pitchGenerator={pitchDetectionGenerator}
        timeoutMs={5000}
      />
    );
  }

  return <Spinner animation="border" variant="primary" />;
};

export default Detection;
