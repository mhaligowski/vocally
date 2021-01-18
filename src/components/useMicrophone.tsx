import { useLogger } from "log";
import { useEffect, useState } from "react";

function useMicrophone() {
  const [stream, setStream] = useState<MediaStream>();
  const logger = useLogger("useMicrophone");

  // Set up the microphone. Do it once, so [] dependency.
  useEffect(() => {
    logger.debug("Acquiring microphone.");
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then((newStream) => {
        logger.debug(
          "Microphone initialized with stream: %j, active?, %s, state: %s.",
          newStream,
          newStream.active,
          newStream.getAudioTracks()[0].readyState
        );
        newStream.getAudioTracks().forEach((t) => {
          t.enabled = false; // eslint-disable-line no-param-reassign
        });
        setStream(newStream);
      });
  }, []);

  return stream;
}

export default useMicrophone;
