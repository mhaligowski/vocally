import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import getLogger from "log";

import sample from "audio/c4.ogg";

const logger = getLogger();

const play = (onEnd: () => void) => {
  const audio = new Audio(sample);
  audio.onended = onEnd;
  audio.play();
};

const Player = () => {
  logger.info("[Widget] Player");
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return <Button>Playing...</Button>;
  }

  return (
    <Button
      variant="outline-primary"
      size="lg"
      onClick={() => {
        setIsPlaying(true);
        play(() => setIsPlaying(false));
      }}
    >
      click to preview
    </Button>
  );
};
export default Player;
