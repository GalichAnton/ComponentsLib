import { RefObject, useEffect, useState } from "react";

import { useLatest } from "./useLatest/useLatest";

export function useResizeObserver(
  elementRef: RefObject<Element>,
  cb: ResizeObserverCallback
) {
  const latestCb = useLatest(cb);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((...args) => {
      latestCb.current(...args);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [latestCb]);
}

function useMutationObserver(cb, options) {
  const [element, setElement] = useState(null);
  const latestCb = useLatest(cb);

  useEffect(() => {
    if (!element) return;

    const observer = new MutationObserver((...args) => {
      latestCb.current(...args);
    });

    observer.observe(element, options);

    return () => observer.disconnect();
  }, [element, latestCb, options]);

  return setElement;
}
