import React, { useEffect, DependencyList } from "react";
import { getLogger } from "log";
import { useState } from "react";
const LOG = getLogger();

type AsyncCallback = () => Promise<void>;
type Callback = () => void;

export function useTimeout(
  handler: AsyncCallback | Callback,
  ms: number,
  deps?: DependencyList
) {
  const [timeoutId, setTimeoutId] = useState<any>();

  const clear = (id: any) => {
    LOG.info("Clearing up the timeout %j.", id);
    setTimeoutId(undefined);
    clearTimeout(id);
  };

  useEffect(() => {
    if (timeoutId !== undefined) return;

    LOG.info("Setting up timeout.");
    const t = setTimeout(() => {
      LOG.info("Calling timeout.");
      handler();
    }, ms);
    setTimeoutId(timeoutId);

    LOG.info("Timeout set %j.", t);

    return () => clear(t);
  }, []);
}
