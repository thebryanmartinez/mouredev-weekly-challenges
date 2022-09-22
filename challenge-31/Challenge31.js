const leapYears = year => {
	const arrayLeepYears = []
	for (let i = year; i < year + 30; i++) {
		if (i % 4 == 0 && i % 100 !== 0) arrayLeepYears.push(i)
	}
	console.log(arrayLeepYears)
}

leapYears(2001)

module.exports = leapYears