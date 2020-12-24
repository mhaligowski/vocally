import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Player from "../components/Player";

type PreviewProps = {
  next: string;
};

export default ({ next }: PreviewProps) => (
  <ButtonGroup>
    <Player />

    <LinkContainer to={next}>
      <Button variant="outline-primary" size="lg">
        start
      </Button>
    </LinkContainer>
  </ButtonGroup>
);
