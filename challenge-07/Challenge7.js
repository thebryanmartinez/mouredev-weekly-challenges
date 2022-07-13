const wordsCounter = text => {
	const resultObject = {}
	text = text.replace(/\p{P}/gu, '')
	text = text.toUpperCase().split(' ')

	for (let i = 0; i <= text.length; i++) {}

	return resultObject
}

console.log(wordsCounter('hello[ world] hello! world hello.'))

module.exports = wordsCounter
