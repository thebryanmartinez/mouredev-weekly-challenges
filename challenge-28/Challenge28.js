const vendingMachine = (coinsArray, selectedProduct) => {
	const coinsToReturn = []
	products = {
		Milkshake: 75,
		Sprite: 150,
		Fanta: 40,
		'Dr Pepper': 110,
		'Mountain Dew': 125,
		Pepsi: 155,
		'Coca Cola': 235,
	}
	if (products[selectedProduct] === undefined) {
		console.log('The product does not exist')
		return coinsArray
	}

	moneyAvailable = coinsArray.reduce((acc, cur) => {
		return (acc += cur)
	})

	if (moneyAvailable < products[selectedProduct]) {
		console.log('You need more coins to buy this product')
		return coinsArray
	}

	console.log(`You have bought one ${selectedProduct}`)
	moneyAvailable -= products[selectedProduct]

	while (moneyAvailable !== 0) {
		if (moneyAvailable >= 200) {
			moneyAvailable -= 200
			coinsToReturn.push(200)
		} else if (moneyAvailable >= 100) {
			moneyAvailable -= 100
			coinsToReturn.push(100)
		} else if (moneyAvailable >= 50) {
			moneyAvailable -= 50
			coinsToReturn.push(50)
		} else if (moneyAvailable >= 10) {
			moneyAvailable -= 10
			coinsToReturn.push(10)
		} else if (moneyAvailable >= 5) {
			moneyAvailable -= 5
			coinsToReturn.push(5)
		}
	}
	return coinsToReturn
}

console.log(vendingMachine([200, 200], 'Coca Cola'))

module.exports = vendingMachine
