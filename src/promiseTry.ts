export function promiseTry<R = unknown>(fn: () => any) {
  return new Promise<R>((resolve) => {
    resolve(fn())
  });
}