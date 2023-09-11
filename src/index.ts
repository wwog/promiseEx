import { promiseRetry } from './promiseRetry'
import { promiseTimeout } from './promiseTimeout'
import { promiseTry } from './promiseTry'
import { sleep } from './sleep'
export type * from './types'

export class PromiseEx<T = unknown> extends Promise<T> {
  static retry = promiseRetry
  static timeout = promiseTimeout
  static try = promiseTry
  static sleep = sleep

  private constructor(noNew: any) {
    super(noNew)
  }
}
