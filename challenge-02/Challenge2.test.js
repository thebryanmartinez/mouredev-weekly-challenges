const fibonacciSecuence = require('../challenges/Challenge2')

test('Pass the test if fibonacci sequence is correct', () => {
	expect(fibonacciSecuence()).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})

// To run test, execute: npm test -- Challenge2.test.js
