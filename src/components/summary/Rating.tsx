import clsx from "clsx";
import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

type RatingProps = {
  no: number;
  of: number;
};
function Rating({ no, of }: RatingProps) {
  const stars = [];
  for (let i = 0; i < of; i += 1) {
    stars.push(i < no ? <StarFill key={i} /> : <Star key={i} />);
  }

  return <div className={clsx("text-primary", "display-3")}>{stars}</div>;
}

export default Rating;
