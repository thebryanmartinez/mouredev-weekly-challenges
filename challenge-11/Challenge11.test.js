const characterDeleting = require('./Challenge11')

test('Returns the same letters in the two arrays', () => {
	expect(characterDeleting('Bryan Martinez', 'Samuel Zelaya')).toStrictEqual([
		['B', 'r', 'n', 'M'],
		['S', 'm', 'u', 'l', 'Z'],
	])
})

test('Returns the same letters in the two arrays', () => {
	expect(
		characterDeleting(
			'If everybody minded their own business, the world would go around a great deal faster than it does.',
			'"Where should I go?" -Alice. "That depends on where you want to end up." - The Cheshire Cat.'
		)
	).toStrictEqual([
		['f', 'v', 'b', 'm'],
		['"', 'W', '?'],
	])
})
