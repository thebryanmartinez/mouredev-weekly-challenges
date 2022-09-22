const isPalindrome = require('./Challenge12')

test('isPalindrome should return false', () => {
  expect(isPalindrome('Bryan')).toBe(false)
})

test('isPalindrome should return false', () => {
  expect(isPalindrome('RaDar')).toBe(true)
})

test('isPalindrome should return false', () => {
  expect(isPalindrome('Racecar')).toBe(true)
})

// To run test, execute: npm test -- Challenge12.test.js
