import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import { PitchRecorder } from "./PitchRecorder";
import { ml5PitchDetection, PitchGenerator } from "pitch/pitch";
import { getLogger } from "log";

const LOG = getLogger();

const PitchDetection = () => {
  const [started, setIsStarted] = useState(false);

  // Audio interfaces
  const [audioContext, _] = useState(new AudioContext()); // read-only
  const [stream, setStream] = useState<MediaStream>();
  const [pitchDetectionGenerator, setPitchDetectionGenerator] = useState<
    PitchGenerator
  >();

  // Set up the microphone.
  useEffect(() => {
    if (!started) {
      setIsStarted(false);
      return;
    }

    LOG.info("Acquiring microphone.");
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then((newStream) => {
        LOG.debug("Microphone initialized with stream: %j.", newStream);
        LOG.debug("New stream is active? %j", newStream.active);
        setStream(newStream);
      });
  }, [started]);

  // Configure the audio stream.
  useEffect(() => {
    if (!started || stream === undefined) {
      return;
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

  return started && pitchDetectionGenerator ? (
    <PitchRecorder
      onFinish={(result) => {
        LOG.info("Result", result);
        setIsStarted(false);
      }}
      pitchGenerator={pitchDetectionGenerator}
      timeoutMs={3000}
    />
  ) : (
    <Button
      onClick={() => setIsStarted(true)}
      variant="outline-primary"
      size="lg"
    >
      Start
    </Button>
  );
};

export { PitchDetection };
