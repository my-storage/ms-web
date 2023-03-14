/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  wait = 1000,
  time?: number,
): T => {
  return ((...args) => {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), wait);
  }) as T;
};
