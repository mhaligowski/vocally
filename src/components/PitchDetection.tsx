import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import getLogger from "log";
import * as Sentry from "@sentry/react";

import { ml5PitchDetection, PitchGenerator, Recording } from "pitch/pitch";
import { Pitch, note, noteToFreq } from "pitch/notes";

import PitchRecorder from "./PitchRecorder";
import Summary from "./Summary";

const LOG = getLogger();
const PitchDetection = () => {
  Sentry.useProfiler("PitchDetection");

  const [started, setIsStarted] = useState(false);

  // webkit vs all the others
  // @ts-ignore
  const AudioCtx = window.AudioContext || window.webkitAudioContext;

  // Audio interfaces
  const [audioContext] = useState(new AudioCtx()); // read-only
  const [stream, setStream] = useState<MediaStream>();
  const [
    pitchDetectionGenerator,
    setPitchDetectionGenerator,
  ] = useState<PitchGenerator>();
  const [recording, setRecording] = useState<Recording>();

  // Set up the microphone.
  useEffect(() => {
    if (!started) {
      return;
    }

    LOG.info("Acquiring microphone.");
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then((newStream) => {
        LOG.debug(
          "Microphone initialized with stream: %j, active?, %s, state: %s.",
          newStream,
          newStream.active,
          newStream.getAudioTracks()[0].readyState
        );
        setStream(newStream);
      });
  }, [started]);

  // Configure the audio stream.
  useEffect(() => {
    if (!started || stream === undefined) {
      return () => {};
    }

    LOG.info("Setting up the context %j and stream %j", audioContext, stream);
    audioContext.createMediaStreamSource(stream);

    LOG.info("Initialized audio.");
    setPitchDetectionGenerator(ml5PitchDetection(audioContext, stream));
    audioContext.resume();

    return () => {
      LOG.info("Cleanup the audio settings");

      LOG.debug("Stop all tracks in the stream %j.", stream);
      stream?.getTracks().forEach((t) => t.stop());

      LOG.debug("Suspend audio context %j.", audioContext);
      audioContext.suspend();
    };
  }, [stream, started]);

  if (recording !== undefined) {
    const referencePitch = note(noteToFreq(60)) as Pitch;

    return <Summary recording={recording} reference={referencePitch} />;
  }
  if (started && pitchDetectionGenerator) {
    return (
      <PitchRecorder
        onFinish={(result) => {
          LOG.info("Result, %j", result);
          setRecording(result);
          setIsStarted(false);
        }}
        pitchGenerator={pitchDetectionGenerator}
        timeoutMs={5000}
      />
    );
  }
  return (
    <Button
      onClick={() => setIsStarted(true)}
      variant="outline-primary"
      size="lg"
    >
      click to start
    </Button>
  );
};

export default PitchDetection;
