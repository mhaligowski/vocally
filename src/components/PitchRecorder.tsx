import React, { useState, useEffect } from "react";

import { PitchGenerator, Sample } from "pitch/pitch";

import getLogger from "log";
import { Button, Spinner } from "react-bootstrap";
import GeneratorComponent from "./GeneratorComponent";

const LOG = getLogger();

type Recording = Sample[];
type PitchRecorderProps = {
  pitchGenerator: PitchGenerator;
  timeoutMs: number;
  onFinish: (samples: Recording) => void;
};

export default function PitchRecorder({
  pitchGenerator,
  timeoutMs,
  onFinish,
}: PitchRecorderProps) {
  const [recording, setRecording] = useState<Recording>([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    if (!started) {
      return () => {};
    }
    LOG.info("Setting up the timeout.");
    const t = setTimeout(() => {
      setFinished(true);
      setStarted(false);
    }, timeoutMs);
    LOG.info("Set up timer %d for %d ms.", t, timeoutMs);

    return () => {
      LOG.info("Clearing out the timeout %d.", t);
      clearTimeout(t);
    };
  }, [started]);

  // Interval set up.
  useEffect(() => {
    if (!started) {
      return () => {};
    }

    setCountdown(timeoutMs / 1000);
    LOG.info("Setting the interval with countdown %d.", timeoutMs);
    const interval = setInterval(() => setCountdown((prev) => prev - 1), 1000);

    return () => {
      LOG.info("Clearing out the interval %d.", interval);
      clearInterval(interval);
    };
  }, [started]);

  useEffect(() => {
    if (finished) {
      LOG.info("Finishing recording.");
      onFinish(recording);
    }
  }, [finished, recording]);

  const addSample = (p: Sample) => {
    const newRecording = recording.concat([p]);
    setRecording(newRecording);
    if (!started) {
      setStarted(true);
    }
  };

  const label = !started ? (
    <h3 className="text-info">start singing!</h3>
  ) : (
    <Button variant="outline-primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        role="status"
        aria-hidden="true"
        size="sm"
        className="mr-2"
        variant="danger"
      />
      {countdown}...
    </Button>
  );

  return pitchGenerator ? (
    <GeneratorComponent generator={pitchGenerator} onTick={addSample}>
      {label}
    </GeneratorComponent>
  ) : (
    <Spinner animation="border" variant="primary" />
  );
}
