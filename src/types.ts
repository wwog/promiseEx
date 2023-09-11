export interface PromiseRetryOptions {
  /**
   * @description 最大重试次数
   * @description_en Maximum number of retries
   * @default 3
   */
  maxRetryTimes?: number
  /**
   * @description 重试间隔时间
   * @description_en Retry interval time
   * @description 1000ms
   */
  retryInterval?: number
  /**
   * @description 重试指数因子,非undefined的情况下采用指数退避策略进行重试
   * @description_en Retry exponential factor, use exponential backoff strategy for retry when it is not undefined
   */
  exponentialFactor?: number
  /**
   * @description 重试条件,非undefined的情况下采用出错可以设置重试条件,满足条件进行重试
   * @description_en Retry condition, when it is not undefined, the retry condition can be set when an error occurs, and the retry is performed when the condition is met
   */
  retryCondition?: (error: Error) => boolean
}


export interface PromiseTimeoutOptions {
  /**
   * @description 超时时间
   * @description_en Timeout time
   * @default 1000ms
   */
  timeout?: number
  /**
   * @description 超时回调函数
   * @description_en Timeout callback function
   */
  timeoutCallback?: (timeout: number) => void
  /**
   * @description 超时错误
   * @description_en Timeout error
   * @default new Error('timeout')
   */
  timeoutError?: Error
}

