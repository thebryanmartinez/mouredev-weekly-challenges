const millisecondsConverter = require('./Challenge19')

test('Return the amount of time in milliseconds', () => {
	expect(millisecondsConverter(2, 18, 27, 6)).toEqual(239226000)
})

test('Return the amount of time in milliseconds', () => {
	expect(millisecondsConverter(7, 45, 20, 5)).toEqual(768005000)
})

test('Return the amount of time in milliseconds', () => {
	expect(millisecondsConverter(10, 5, 40, 18)).toEqual(884418000)
})

// To run test, execute: npm test -- Challenge19.test.js
