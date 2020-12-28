import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

import { Sample, Recording } from "pitch/pitch";
import { Pitch } from "pitch/notes";
import clsx from "clsx";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  ReferenceLine,
} from "recharts";

type RatingProps = {
  no: number;
  of: number;
};
function Rating({ no, of }: RatingProps) {
  const stars = [];
  for (let i = 0; i < of; i += 1) {
    stars.push(i <= no ? <StarFill key={i} /> : <Star key={i} />);
  }

  return <div className={clsx("text-primary", "display-3")}>{stars}</div>;
}

export type SummaryProps = {
  recording: Recording;
  reference: Pitch;
};

const sum = (a: number, b: number) => a + b;

export default ({ recording, reference }: SummaryProps) => {
  const nonEmpty = recording.filter((s?: Sample) => !!s);
  const freqResult =
    nonEmpty
      .map((s: Sample) => s!.frequency - reference.frequency)
      .reduce(sum, 0) / nonEmpty.length;

  const midiResult =
    nonEmpty
      .map((s: Sample) => Math.abs(s!.note - reference.note))
      .reduce(sum, 0) / nonEmpty.length;

  let starCount: number;
  if (midiResult <= 0.5) {
    starCount = 5;
  } else if (midiResult <= 1) {
    // within half step
    starCount = 4;
  } else if (midiResult <= 2) {
    // within whole step
    starCount = 3;
  } else if (midiResult <= 4) {
    // within third
    starCount = 2;
  } else if (midiResult <= 7) {
    // withinn fifth
    starCount = 1;
  } else {
    // you suck
    starCount = 0;
  }

  return (
    <Container>
      <Row>
        <Col className="pb-3">
          <Rating no={starCount} of={5} />
        </Col>
      </Row>

      <Row>
        <Col className={clsx("col-md-6", "offset-md-3")}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart height={100} width={400} data={nonEmpty as object[]}>
              <CartesianGrid strokeDasharray="3 3" />
              <ReferenceLine
                y={reference.note}
                stroke="red"
                strokeDasharray="3 3"
              />

              <Line
                type="monotone"
                dataKey="note"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <Row>
        <Col className={clsx("col-md-6", "offset-md-3")}>
          <Alert variant="success">
            Received {nonEmpty.length} sample(s) averaging to {freqResult} from
            C<sub>4</sub>.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};
