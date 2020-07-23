import React, { useEffect, useState } from "react";

type AsyncCallback = () => Promise<void>;

export function useTimeout(handler: AsyncCallback, ms: number) {
  const [timeoutId, setTimeoutId] = useState<any>();

  useEffect(() => {
    const t = setTimeout(handler, ms);
    setTimeoutId(t);

    return () => clearTimeout(timeoutId);
  }, []);
}
