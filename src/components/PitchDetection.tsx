import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { PitchRecorder } from "./PitchRecorder";

const PitchDetection = () => {
  const [started, setIsStarted] = useState(false);

  return started ? (
    <PitchRecorder onFinish={() => setIsStarted(false)} />
  ) : (
    <Button
      onClick={() => setIsStarted(true)}
      variant="outline-primary"
      size="lg"
    >
      Start
    </Button>
  );
};

export { PitchDetection };
