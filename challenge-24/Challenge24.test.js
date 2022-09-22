const { forLoop, whileLoop, doWhileLoop } = require('./Challenge24')

test('For loop should print 1 to 100', () => {
	console.log = jest.fn()
	forLoop()
	expect(console.log).toHaveBeenCalledTimes(100)
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(100)
})

test('While loop should print 1 to 100', () => {
	console.log = jest.fn()
	whileLoop()
	expect(console.log).toHaveBeenCalledTimes(100)
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(100)
})

test('Do while loop should print 1 to 100', () => {
	console.log = jest.fn()
	doWhileLoop()
	expect(console.log).toHaveBeenCalledTimes(100)
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(100)
})

// To run test, execute: npm test -- Challenge24.test.js
