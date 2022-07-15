const polygonArea = require('./Challenge4')

test('Returns the exact object', () => {
	expect(polygonArea(4, 4)).toStrictEqual({
		Triangle: 8,
		Square: 16,
		Rectangle: false,
	})
})

test('Returns the exact object', () => {
	expect(polygonArea(12, 8)).toStrictEqual({
		Triangle: 48,
		Square: false,
		Rectangle: 96,
	})
})

// To run test, execute: npm test -- Challenge4.test.js
