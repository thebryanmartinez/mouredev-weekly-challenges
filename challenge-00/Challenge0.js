const fizzBuzz = () => {
	const resultArray = []
	for (let i = 1; i <= 100; i++) {
		i % 3 === 0 && i % 5 === 0
			? resultArray.push('fizzbuzz')
			: i % 3 === 0
			? resultArray.push('fizz')
			: i % 5 === 0
			? resultArray.push('buzz')
			: resultArray.push(i)
	}
	return resultArray
}

console.log(fizzBuzz())

module.exports = fizzBuzz
