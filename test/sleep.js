import { describe, it } from 'node:test'
import { PromiseEx } from '../dist/index.js'

describe('sleep', () => {
  it('should pause execution for specified time', async () => {
    const start = Date.now()
    await PromiseEx.sleep(1000)
    const end = Date.now()
    const diff = end - start
    if (diff < 1000) {
      throw new Error(`Expected to sleep for 1000ms, but slept for ${diff}ms`)
    }
    if (diff > 1100) {
      throw new Error(`Expected to sleep for 1000ms, but slept for ${diff}ms`)
    }
  })

  it('should not pause if time is not positive', async () => {
    const start = Date.now()
    await PromiseEx.sleep(-1000)
    const end = Date.now()
    const diff = end - start
    if (diff > 100) {
      throw new Error(`Expected to sleep for 0ms, but slept for ${diff}ms`)
    }
  })
})
