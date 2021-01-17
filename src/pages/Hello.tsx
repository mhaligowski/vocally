import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLogger } from "log";
import clsx from "clsx";

type HelloProps = {
  next: string;
};

const Hello = ({ next }: HelloProps) => {
  const LOG = useLogger("Hello");
  LOG.info("Hello");

  return (
    <Container>
      <Row className={clsx("text-center")}>
        <Col>
          <h1 className="display-6">how accurate can you sing?</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={12}>
          <p>
            <span className="logo">vocally</span> lets you put your singing{" "}
            <strong>voice</strong> to the test. No sign-ups, no payments, no
            tracking, no content sharing. Your voice recording is{" "}
            <strong>not being stored anywhere </strong>, so you don&lsquo;t have
            worry about someone listening to you.
          </p>

          <p>
            vocally uses state-of-the-art artificial intelligence model that
            analyses the pitch of your voice over time and compares it to the
            reference note. Everything without reaching any server!
          </p>
        </Col>
        <Col>
          <h3>Checking your pitch accuracy is simple as 1-2-3</h3>

          <ol>
            <li>
              <strong>listen</strong> to the sample
            </li>
            <li>
              <strong>sing</strong> the tune for 3 seconds
            </li>
            <li>
              <strong>see</strong> the results immediately
            </li>
          </ol>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p className={clsx("text-center")}>
            <Link to={next}>
              <Button variant="outline-primary" size="lg">
                start the test now!
              </Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Hello;
