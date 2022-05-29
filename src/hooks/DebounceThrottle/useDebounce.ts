import { useMemo } from "react";

export const useDebounce = (cb: Function, ms: number) => {
  return useMemo(() => debounce(cb, ms), [ms]);
};

function debounce(func: Function, delay: number) {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line no-invalid-this
      func.apply(this, args);
    }, delay);
  };
}
