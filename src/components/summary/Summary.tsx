import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Sample, Recording } from "pitch/pitch";
import { Pitch } from "pitch/notes";
import clsx from "clsx";
import Rating from "./Rating";
import Chart from "./Chart";
import Message from "./Message";

export type SummaryProps = {
  recording: Recording;
  reference: Pitch;
};

const sum = (a: number, b: number) => a + b;

export default ({ recording, reference }: SummaryProps) => {
  const nonEmpty: Pitch[] = recording.filter((s?: Sample) => !!s) as Pitch[];

  const midiResult =
    nonEmpty
      .map((s: Sample) => Math.abs(s!.midiNote - reference.midiNote))
      .reduce(sum, 0) / nonEmpty.length;

  let starCount: number;
  if (midiResult <= 0.5) {
    // perfect match
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
    // within fifth
    starCount = 1;
  } else {
    // you suck
    starCount = 0;
  }

  const domainCenter = 60;
  const domainMargin = 2;
  const domainStart = domainCenter - Math.floor(midiResult) - domainMargin;
  const domainEnd = domainCenter + Math.floor(midiResult) + domainMargin * 2;

  return (
    <Container>
      <Row>
        <Col className={clsx("pb-3", "col-md-6", "offset-md-3", "text-center")}>
          <Rating no={starCount} of={5} />
        </Col>
      </Row>
      <Row>
        <Col className={clsx("col-md-6", "offset-md-3")}>
          <Message rating={starCount} />
        </Col>
      </Row>
      <Row>
        <Col className={clsx("col-md-6", "offset-md-3")}>
          <Chart
            data={nonEmpty}
            domainStart={domainStart}
            domainEnd={domainEnd}
            reference={reference}
            result={midiResult}
          />
        </Col>
      </Row>
    </Container>
  );
};
