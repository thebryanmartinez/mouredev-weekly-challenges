const invertedChain = require('./Challenge6')

test('Returns the reversed string', () => {
	expect(invertedChain('Hello world!')).toBe('!dlrow olleH')
})

test('Returns the reversed string', () => {
	expect(
		invertedChain(
			'Programs must be written for people to read, and only incidentally for machines to execute.'
		)
	).toBe(
		'.etucexe ot senihcam rof yllatnedicni ylno dna ,daer ot elpoep rof nettirw eb tsum smargorP'
	)
})

test('Returns the reversed string', () => {
	expect(invertedChain('This is a new Challenge completed!')).toBe(
		'!detelpmoc egnellahC wen a si sihT'
	)
})

// To run test, execute: npm test -- Challenge6.test.js
