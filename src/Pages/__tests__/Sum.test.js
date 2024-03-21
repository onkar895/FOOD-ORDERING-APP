// Demo test case

import { Sum, sum } from '../Sum'

test('Sum function to calculate sum of two numbers', () => {
  const result = sum(2, 3)
  // Assertion
  expect(result).toBe(5)
})
