const theSecondOne = numbersArray => {
	numbersArray.sort((a, b) => {
		if (a > b) return -1
		if (b > a) return 1
	})

	return numbersArray[1]
}

theSecondOne([1, 2, 3, 4, 5])

module.exports = theSecondOne
