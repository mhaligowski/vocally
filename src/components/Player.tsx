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

  useEffect(() => {
    logger.info("Changed playing: %s", isPlaying);
  }, [isPlaying]);

  const message = isPlaying ? "playing..." : "play reference";

  return (
    <Button
      variant="outline-primary"
      size="lg"
      disabled={isPlaying}
      onClick={() => {
        setIsPlaying(true);
        play(() => {
          setIsPlaying(false);
        });
      }}
    >
      {message}
    </Button>
  );
};
export default Player;
