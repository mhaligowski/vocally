import React, { useState, useEffect } from "react";
import { useLogger } from "log";
import * as Sentry from "@sentry/react";

import { ml5PitchDetection, PitchGenerator, Recording } from "pitch/pitch";
import { Pitch, note, noteToFreq } from "pitch/notes";

import { Redirect } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useMicrophone from "components/useMicrophone";
import PitchRecorder from "../components/PitchRecorder";

type DetectionProps = {
  next: string;
  reference: number;
  timeout: number;
};

const Detection = ({ next: path, reference, timeout }: DetectionProps) => {
  const logger = useLogger();
  logger.info("Detection");
  Sentry.useProfiler("Detection");

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

    logger.info(
      "Setting up the context in state %j and stream %j",
      audioContext.state,
      stream.id
    );
    const node = audioContext.createMediaStreamSource(stream);

    logger.info("Media stream source created.", node);
    setPitchDetectionGenerator(ml5PitchDetection(audioContext, stream));
    audioContext.resume();

    return () => {
      logger.info("Cleanup the audio settings");
      logger.debug("Stop all tracks in the stream %j.", stream);
      stream?.getTracks().forEach((t) => t.stop());

      logger.debug("Suspend audio context %j.", audioContext);
      audioContext.suspend();
    };
  }, [stream]);

  // Finished recording.
  if (recording !== undefined) {
    const referencePitch = note(noteToFreq(reference)) as Pitch;
    return (
      <Redirect
        to={{
          pathname: path,
          state: { recording, reference: referencePitch },
        }}
      />
    );
  }

  let outputWidget;
  // recording is set up.
  if (pitchDetectionGenerator) {
    logger.info("Setting up actual recorder, %j", pitchDetectionGenerator);
    outputWidget = (
      <PitchRecorder
        onFinish={setRecording}
        pitchGenerator={pitchDetectionGenerator}
        timeoutMs={timeout}
      />
    );
  } else {
    outputWidget = <Spinner animation="border" variant="primary" />;
  }

  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h2 className="display-6">step 2: sing the pitch you heard!</h2>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>{outputWidget}</Col>
      </Row>
    </Container>
  );
};

export default Detection;
