const rockPaperScissorsGame = require('./Challenge25')

test('Player 1 should win', () => {
	console.log = jest.fn()
	rockPaperScissorsGame([
		['R', 'S'],
		['R', 'S'],
		['P', 'R'],
		['S', 'P'],
		['P', 'S'],
		['S', 'R'],
	])
	expect(console.log).toHaveBeenCalledWith('Player 1')
})

test('Player 2 should win', () => {
	console.log = jest.fn()
	rockPaperScissorsGame([
		['R', 'P'],
		['S', 'R'],
		['P', 'R'],
		['S', 'P'],
		['P', 'S'],
		['S', 'R'],
	])
	expect(console.log).toHaveBeenCalledWith('Player 2')
})

test('Players should tie', () => {
	console.log = jest.fn()
	rockPaperScissorsGame([
		['R', 'P'],
		['S', 'R'],
		['P', 'R'],
		['S', 'P'],
		['P', 'R'],
		['S', 'R'],
	])
	expect(console.log).toHaveBeenCalledWith('Tie')
})

// To run test, execute: npm test -- Challenge25.test.js
