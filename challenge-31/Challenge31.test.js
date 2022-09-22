const leapYears = require('./Challenge31')

test('Should print coming leap years - HP', () => {
	console.log = jest.fn()
	leapYears(2020)
	expect(console.log).toHaveBeenCalledWith([
		2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048,
	])
})

test('Should print coming leap years - HP', () => {
	console.log = jest.fn()
	leapYears(1997)
	expect(console.log).toHaveBeenCalledWith([2004, 2008, 2012, 2016, 2020, 2024])
})

test('Should print coming leap years - HP', () => {
	console.log = jest.fn()
	leapYears(2001)
	expect(console.log).not.toHaveBeenCalledWith([
		2004, 2008, 2012, 2016, 2020, 2022, 2028,
	])
})

// To run test, execute: npm test -- Challenge31.test.js
