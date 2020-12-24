import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLogger } from "log";

type HelloProps = {
  next: string;
};

const Hello = ({ next }: HelloProps) => {
  const LOG = useLogger();
  LOG.info("[Widget] Hello");

  return (
    <Link to={next}>
      <Button variant="outline-primary" size="lg">
        start
      </Button>
    </Link>
  );
};
export default Hello;
