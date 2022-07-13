const fibonacciSecuence = () => {
	const sequence = [0, 1]
	let number = 0

	for (let i = 0; true; i++) {
		number = sequence[i] + sequence[i + 1]
		if (number >= 50) return sequence
		sequence.push(number)
	}
}

module.exports = fibonacciSecuence
