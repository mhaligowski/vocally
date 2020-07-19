import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { PitchDetection } from "./components/PitchDetection";
import { Container, Row, Col } from "react-bootstrap";

export const App = () => (
  <Container>
    <Row as="header">
      <h1 className="display-1 text-center mt-5">vocally</h1>
      <h2 className="text-center">sing C4!</h2>
    </Row>

    <Row as="section" className="text-center">
      <Col>
        <PitchDetection />
      </Col>
    </Row>

    <Row as="footer"></Row>
  </Container>
);
