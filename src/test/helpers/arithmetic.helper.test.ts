import { dif, sum } from '../../helpers/arithmetic.helper'

describe('arithmetic helper', () => {
  it('can add two number', () => {
    expect(sum(1, 1)).toBe(2)
  })
  it('can subtract two number', () => {
    expect(dif(1, 1)).toBe(0)
  })
})
