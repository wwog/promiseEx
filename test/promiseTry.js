import { PromiseEx } from '../dist/index.js'
import { it } from 'node:test'

it('PromiseTry', async () => {
  const syncFn = () => {
    throw new Error('syncFn error')
  }
  PromiseEx.try(syncFn).catch((err) => {
    if (err.message !== 'syncFn error') {
      throw err
    }
  })

  const asyncFn = async () => {
    throw new Error('asyncFn error')
  }
  await PromiseEx.try(asyncFn).catch((err) => {
    if (err.message !== 'asyncFn error') {
      throw err
    }
  })
})
