/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from 'react';

export type DebouncedFunc<P extends any[]> = (...params: P) => any;

/**
 * Helper hook to debounce a function call
 */
export const useDebounce = <P extends any[]>(funcToDebounce: DebouncedFunc<P>, timeout = 250) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const clear = useCallback(() => timeoutRef.current && clearTimeout(timeoutRef.current), [timeoutRef]);
  const debouncedFunc = useCallback(
    (...params: P) => {
      clear();
      timeoutRef.current = setTimeout(() => {
        funcToDebounce(...params);
      }, timeout);
    },
    [funcToDebounce, clear, timeout]
  );
  useEffect(() => clear, [clear]);

  return debouncedFunc;
};