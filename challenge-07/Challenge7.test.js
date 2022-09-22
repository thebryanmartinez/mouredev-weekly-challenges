const wordCounter = require('./Challenge7')

test('Should return a happy path result', () => {
	expect(wordCounter('hello[ world] hello! world hello.')).toEqual({
		hello: 3,
		world: 2,
	})
})

test('Should return a sad path result', () => {
	expect(
		wordCounter(
			'"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."'
		)
	).toEqual({
		two: 1,
		things: 1,
		are: 1,
		infinite: 1,
		the: 2,
		universe: 2,
		and: 2,
		human: 1,
		stupidity: 1,
		im: 1,
		not: 1,
		sure: 1,
		about: 1,
	})
})

test('Should return a sad path result', () => {
	expect(wordCounter('hello[ world] hello! world hello.')).not.toEqual({
		hello: 5,
		world: 1,
	})
})

// To run test, execute: npm test -- Challenge7.test.js
