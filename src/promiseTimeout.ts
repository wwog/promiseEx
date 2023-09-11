import type { PromiseTimeoutOptions } from "./types"

/**
 * @description 通用的promise超时函数
 * @description_en Common promise timeout function
 */
export function promiseTimeout<T>(promise: Promise<T>, options?: PromiseTimeoutOptions) {
  const { timeout = 1000, timeoutCallback, timeoutError = new Error('timeout') } = options ?? {}
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      timeoutCallback?.(timeout)
      reject(timeoutError)
    }, timeout)
    promise
      .then((res) => {
        clearTimeout(timer)
        resolve(res)
      })
      .catch((error) => {
        clearTimeout(timer)
        reject(error)
      })
  })
}
