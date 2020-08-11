import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

import { Sample, Recording } from "pitch/pitch";
import { Pitch } from "pitch/notes";
import clsx from "clsx";

type RatingProps = {
  no: number;
  of: number;
};
function Rating({ no, of }: RatingProps) {
  let stars = [];
  for (let i = 0; i < of; i++) {
    stars.push(i <= no ? <StarFill /> : <Star />);
  }

  return <div className={clsx("text-primary", "display-1")}>{stars}</div>;
}

type SummaryProps = {
  recording: Recording;
  reference: Pitch;
};
export function Summary({ recording, reference }: SummaryProps) {
  const result = recording
    .filter((s?: Sample) => !!s)
    .map((s: Sample) => s!.frequency - reference.frequency);
  const sum = result.reduce((a, b) => a + b, 0);

  return (
    <Container>
      <Row>
        <Rating no={3} of={5} />
      </Row>
      <Row>
        <Alert variant={"success"}>
          Received {result.length} sample(s) averaging to {sum / result.length}{" "}
          from C<sub>4</sub>.
        </Alert>
      </Row>
    </Container>
  );
}
