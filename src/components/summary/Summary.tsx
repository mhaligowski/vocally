import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

import { Sample, Recording } from "pitch/pitch";
import { noteName, Pitch } from "pitch/notes";
import clsx from "clsx";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
  Text,
  YAxis,
  Label,
} from "recharts";
import { useLogger } from "log";

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
  const logger = useLogger("Summary");
  const nonEmpty: Pitch[] = recording.filter((s?: Sample) => !!s) as Pitch[];

  const midiResult =
    nonEmpty
      .map((s: Sample) => Math.abs(s!.midiNote - reference.midiNote))
      .reduce(sum, 0) / nonEmpty.length;

  let starCount: number;
  let message: string;
  if (midiResult <= 0.5) {
    // perfect match
    starCount = 5;
    message = "Spot on!";
  } else if (midiResult <= 1) {
    // within half step
    starCount = 4;
    message = "Almost perfect";
  } else if (midiResult <= 2) {
    // within whole step
    starCount = 3;
    message = "Good!";
  } else if (midiResult <= 4) {
    // within third
    starCount = 2;
    message = "That's the spirit!";
  } else if (midiResult <= 7) {
    // within fifth
    starCount = 1;
    message = "Off-pitch :(";
  } else {
    // you suck
    starCount = 0;
    message = "Why don't you try again?";
  }

  logger.debug("Midi result: %j", midiResult);
  const domainCenter = 60;
  const domainMargin = 2;
  const domainStart = domainCenter - Math.floor(midiResult) - domainMargin; // down by average + mar
  const domainEnd = domainCenter + Math.floor(midiResult) + domainMargin * 2; // up by average + mar
  return (
    <Container>
      <Row>
        <Col className={clsx("pb-3", "col-md-6", "offset-md-3", "text-center")}>
          <Rating no={starCount} of={5} />
        </Col>
      </Row>
      <Row>
        <Col className={clsx("col-md-6", "offset-md-3")}>
          <Alert variant="success" className={clsx("text-center")}>
            {message}
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col className={clsx("col-md-6", "offset-md-3")}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart height={100} width={400} data={nonEmpty as object[]}>
              <CartesianGrid strokeDasharray="3 3" />
              <ReferenceLine
                y={reference.midiNote}
                stroke="red"
                strokeDasharray="3 3"
              >
                <Label position="top">reference</Label>
              </ReferenceLine>

              <YAxis
                interval={0}
                minTickGap={1}
                allowDecimals={false}
                domain={[domainStart, domainEnd]}
                ticks={Array(domainEnd - domainStart)
                  .fill(0)
                  .map((_, i) => i + domainStart)}
                tick={(props: any) => {
                  return (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Text {...props}>{`${noteName(props.payload.value)}`}</Text>
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="midiNote"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
              <ReferenceLine y={domainCenter - midiResult}>
                <Label position="top">you</Label>
              </ReferenceLine>
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};
