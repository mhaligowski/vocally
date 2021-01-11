import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import getLogger from "log";

import sample from "audio/c4.ogg";

const logger = getLogger();

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSample] = useState(new Audio(sample));

  const play = (onEnd: () => void) => {
    audioSample.src = sample;
    audioSample.onended = onEnd;
    audioSample.muted = false;
    audioSample.play();
  };

  useEffect(() => {
    logger.info("Changed playing: %s", isPlaying);
  }, [isPlaying]);

  const message = isPlaying ? "playing..." : "play the note";

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
