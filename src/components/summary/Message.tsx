import clsx from "clsx";
import React from "react";
import { Alert } from "react-bootstrap";

type MessageProps = {
  rating: number;
};

const MESSAGES: string[] = [
  "Why don't you try again?",
  "Off-pitch :(",
  "That's the spirit!",
  "Good!",
  "Almost perfect",
  "Spot on!",
];

export default ({ rating }: MessageProps) => {
  const idx = Math.max(0, Math.min(rating - 1));
  return (
    <Alert variant="success" className={clsx("text-center")}>
      {MESSAGES[idx]}
    </Alert>
  );
};
