const isAnAnagram = require('./Challenge1')

test('Return anagram as true', () => {
	expect(isAnAnagram('Murcielago', 'Crema')).toBe(true)
})
test('Return anagram as false', () => {
	expect(isAnAnagram('Murcielago', 'Bryan')).toBe(false)
})

// To run test, execute: npm test -- Challenge1.test.js
