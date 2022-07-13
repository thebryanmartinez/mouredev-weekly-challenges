const invertedChain = textToReverse => {
	const reversedChain = []

	for (let i = textToReverse.length; i >= 0; i--) {
		reversedChain.push(textToReverse[i])
	}
	return reversedChain.join('')
}

console.log(invertedChain('Hello world'))

module.exports = invertedChain
