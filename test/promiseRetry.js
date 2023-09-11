import { it } from 'node:test'
import { PromiseEx } from '../dist/index.js'

it('promiseRetry', async () => {
  let count = 0
  const promiseFn = () =>
    new Promise((resolve, reject) => {
      if (count < 2) {
        count++
        reject(new Error('errorxxxx'))
      } else {
        resolve('success')
      }
    })
  const result = await PromiseEx.retry(promiseFn, { maxRetryTimes: 3 })
  if (result !== 'success') {
    throw new Error(`Expected result to be 'success', but got '${result}'`)
  }
})
