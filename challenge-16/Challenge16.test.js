const inCapitalLetters = require('./Challenge16')

test('Should return happy path result', () => {
  expect(inCapitalLetters('hello world yEs nO')).toBe('Hello World Yes No')
})

test('Should return happy path result', () => {
  expect(
		inCapitalLetters('A room without books is like a body without a soul.')
	).toBe('A Room Without Books Is Like A Body Without A Soul.')
})

test('Should return sad path result', () => {
  expect(inCapitalLetters('hello world yEs nO')).not.toBe('hello world yes no')
})

// To run test, execute: npm test -- Challenge16.test.js
