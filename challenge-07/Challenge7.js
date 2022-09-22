const wordsCounter = text => {
	const resultObject = {}
	const onlyLetters = text.replace(/\p{P}/gu, '')
	const wordsArray = onlyLetters.toLowerCase().split(' ')

	for (const word of wordsArray) {
		if (word in resultObject) {
			resultObject[word] += 1
		} else {
			resultObject[word] = 1
		}
	}
	return resultObject
}

console.log(wordsCounter('"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."'))

module.exports = wordsCounter
