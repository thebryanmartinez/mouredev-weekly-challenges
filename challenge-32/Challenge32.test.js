const theSecondOne = require('./Challenge32')

test('Return the second highest number - HP', () => {
	expect(theSecondOne([200, 40, 32, 100, 87, 92])).toBe(100)
})

test('Return the highest number - SP', () => {
	expect(theSecondOne([0, -1, -200, 10, -95])).not.toBe(10)
})

// To run test, execute: npm test -- Challenge32.test.js
