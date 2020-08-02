import React from "react";
import { Alert } from "react-bootstrap";
import { getLogger } from "log";

const LOG = getLogger();

import { Sample, Recording } from "pitch/pitch";
import { Pitch } from "pitch/notes";

type SummaryProps = {
  recording: Recording;
  reference: Pitch;
};

export function Summary({ recording, reference }: SummaryProps) {
  const result = recording
    .filter((s?: Sample) => !!s)
    .map((s: Sample) => s!.frequency - reference.frequency);
  const sum = result.reduce((a, b) => a + b, 0);
  LOG.info("Sum: %f", sum);

  return (
    <Alert variant={"success"}>
      Received {result.length} sample(s) averaging to {sum / result.length} from
      C<sub>4</sub>.
    </Alert>
  );
}
