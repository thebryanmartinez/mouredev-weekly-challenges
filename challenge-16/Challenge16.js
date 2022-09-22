const inCaptialLetters = str => {
	const wordsArray = str.toLowerCase().split(' ')
	const resultText = []
	for (let word of wordsArray) {
		resultText.push(word[0].toUpperCase() + word.slice(1))
	}

	return resultText.join(' ')
}

console.log(
	inCaptialLetters('A room without books is like a body without a soul.')
)

module.exports = inCaptialLetters
