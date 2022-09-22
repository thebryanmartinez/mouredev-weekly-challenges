const vendingMachine = require('./Challenge28')

test('Product does not exist', () => {
	console.log = jest.fn()
	expect(vendingMachine([5, 10, 50], 'Espresso')).toStrictEqual([5, 10, 50])
	expect(console.log).toHaveBeenCalledWith('The product does not exist')
})

test('Coins are not enough', () => {
	console.log = jest.fn()
	expect(vendingMachine([5, 10, 50], 'Dr Pepper')).toStrictEqual([5, 10, 50])
	expect(console.log).toHaveBeenCalledWith(
		'You need more coins to buy this product'
	)
})

test('Happy path buying a Fanta', () => {
	console.log = jest.fn()
	expect(vendingMachine([5, 50, 50, 100, 5], 'Fanta')).toStrictEqual([
		100, 50, 10, 10,
	])
	expect(console.log).toHaveBeenCalledWith('You have bought one Fanta')
})

test('Happy path buying a Coca Cola', () => {
	console.log = jest.fn()
	expect(vendingMachine([200, 200], 'Coca Cola')).toStrictEqual([
		100, 50, 10, 5,
	])
	expect(console.log).toHaveBeenCalledWith('You have bought one Coca Cola')
})

// To run test, execute: npm test -- Challenge28.test.js
