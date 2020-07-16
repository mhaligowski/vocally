import React, { useEffect, useState } from "react";

type Callback = () => void;

type TimeoutProps = {
  ms: number;
  onTimeout: Callback;
  children: any;
};

export function Timeout(props: TimeoutProps) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (timeoutId || finished) return;

    const newTimeoutId: NodeJS.Timeout = setTimeout(() => {
      setFinished(true);
      props.onTimeout();
    }, props.ms);

    setTimeoutId(newTimeoutId);

    return () => {
      if (timeoutId && !finished) clearTimeout(timeoutId);
    };
  }, []);

  if (!finished) {
    return props.children;
  } else {
    return "dupa";
  }
}
