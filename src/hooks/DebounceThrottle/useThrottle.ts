import { useMemo } from "react";
export const useThrottle = (cb: Function, ms: number) => {
  return useMemo(() => throttle(cb, ms), [ms]);
};

function throttle(func: Function, delay: number) {
  let isWaiting = false;
  return function (this: any, ...args: any[]) {
    if (isWaiting) return;
    // eslint-disable-next-line no-invalid-this
    else func.apply(this, args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
}
