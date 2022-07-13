const isAnAnagram = (firstWord, secondWord) => {
	let isLetterInside = false
	let isWordAnagram = false

	;[firstWord, secondWord] = [firstWord.toUpperCase(), secondWord.toUpperCase()]

	if (firstWord === secondWord)
		return (false[(firstWord, secondWord)] = [
			firstWord.split(''),
			secondWord.split(''),
		])

	for (let i = 0; i < secondWord.length; i++) {
		isLetterInside = false
		for (let j = 0; j < firstWord.length; j++) {
			if (firstWord[j] === secondWord[i]) {
				isLetterInside = true
				break
			}
		}
		isLetterInside ? (isWordAnagram = true) : (isWordAnagram = false)
		if (!isWordAnagram) return false
	}
	return true
}

module.exports = isAnAnagram
