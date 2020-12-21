import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import getLogger from "log";

const logger = getLogger();

type HelloProps = {
  link: string;
};

const Hello = ({ link }: HelloProps) => {
  logger.info("[Widget] Hello");
  return (
    <Link to={link}>
      <Button variant="outline-primary" size="lg">
        click to start
      </Button>
    </Link>
  );
};
export default Hello;
