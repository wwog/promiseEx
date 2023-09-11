import { promiseRetry } from './promiseRetry'
import { promiseTimeout } from './promiseTimeout'
import { promiseTry } from './promiseTry'
export type * from './types'

export class PromiseEx<T = unknown> extends Promise<T> {
  static retry = promiseRetry
  static timeout = promiseTimeout
  static try = promiseTry

  private constructor(noNew: any) {
    super(noNew)
  }
}
