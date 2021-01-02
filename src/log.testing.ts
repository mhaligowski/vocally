/* eslint-disable no-console */
export default () => console;
export function useLogger(source?: string) {
  return {
    debug: (...args: any[]) => console.debug(source, args),
    info: (...args: any[]) => console.info(source, args),
  };
}
