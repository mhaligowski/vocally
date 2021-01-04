import React, { useState, useEffect } from "react";
import getLogger, { useLogger } from "log";
import * as Sentry from "@sentry/react";

import { ml5PitchDetection, PitchGenerator, Recording } from "pitch/pitch";
import { Pitch, note, noteToFreq } from "pitch/notes";

import { Redirect } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
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
        newStream.getAudioTracks().forEach((t) => {
          t.enabled = false; // eslint-disable-line no-param-reassign
        });
        setStream(newStream);
      });
  }, []);

  return stream;
}

const Detection = ({ next: path }: DetectionProps) => {
  LOG.info("Recorder");
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

  let outputWidget;
  // recording is set up.
  if (pitchDetectionGenerator) {
    LOG.info("Setting up actual recorder, %j", pitchDetectionGenerator);
    outputWidget = (
      <PitchRecorder
        onFinish={(result) => {
          setRecording(result);
        }}
        pitchGenerator={pitchDetectionGenerator}
        timeoutMs={5000}
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
