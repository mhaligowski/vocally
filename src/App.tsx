import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { PitchDetection } from "./components/PitchDetection";
import { Container, Row, Col } from "react-bootstrap";

import clsx from "clsx";

export const App = () => (
  <Container>
    <Row as="header">
      <h1 className={clsx("display-1", "text-center", "mt-5", "title")}>vocally</h1>
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
