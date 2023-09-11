import { describe, it } from 'node:test'
import { PromiseEx } from '../dist/index.js'

describe('promiseTimeout', () => {
  it('should reject the promise if it does not resolve within the specified timeout', async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 2000))
    try {
      await PromiseEx.timeout(promise, { timeout: 1000 })
      throw new Error('Expected promise to be rejected, but it was resolved')
    } catch (error) {
      if (error.message !== 'timeout') {
        throw new Error(`Expected error message to be 'timeout', but got '${error.message}'`)
      }
    }
  })
})
