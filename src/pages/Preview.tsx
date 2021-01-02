import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Player from "../components/Player";

type PreviewProps = {
  next: string;
};

export default ({ next }: PreviewProps) => (
  <Container className="text-center">
    <Row>
      <Col>
        <h2 className="display-6">step 1: listen to the sample note</h2>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <ButtonGroup>
          <Player />

          <LinkContainer to={next}>
            <Button variant="outline-primary" size="lg">
              start singing!
            </Button>
          </LinkContainer>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);
