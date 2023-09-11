import type { AsyncFunction, PromiseRetryOptions } from './types'

/**
 * @description 通用的promise重试函数
 * @description_en Common promise retry function
 */
export function promiseRetry<T>(promise: AsyncFunction<T>, options?: PromiseRetryOptions) {
  const { maxRetryTimes = 3, retryInterval = 1000, exponentialFactor, retryCondition } = options ?? {}
  let retryTimes = 0
  return new Promise<T>((resolve, reject) => {
    const retry = () => {
      promise()
        .then(resolve)
        .catch((error) => {
          if (retryTimes < maxRetryTimes) {
            retryTimes++
            if (retryCondition && !retryCondition(error)) {
              reject(error)
            } else {
              setTimeout(
                () => {
                  retry()
                },
                exponentialFactor ? retryInterval * Math.pow(exponentialFactor, retryTimes) : retryInterval,
              )
            }
          } else {
            reject(error)
          }
        })
    }
    retry()
  })
}
