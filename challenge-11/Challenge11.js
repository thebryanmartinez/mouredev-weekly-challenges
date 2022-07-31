const characterDeleting = (str1, str2) => {
	str1 = str1.split('')
	str2 = str2.split('')

	const out1 = []
	const out2 = []
	let isLetter = false

	for (let i = 0; i < str1.length; i++) {
		isLetter = false
		for (let j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				isLetter = true
			}
		}
		if (!isLetter) {
			if (out1.indexOf(str1[i]) !== -1) {
				break
			} else {
				out1.push(str1[i])
			}
		}
	}

	for (let i = 0; i < str2.length; i++) {
		isLetter = false
		for (let j = 0; j < str1.length; j++) {
			if (str2[i] === str1[j]) {
				isLetter = true
			}
		}
		if (!isLetter) {
			if (out2.indexOf(str2[i]) !== -1) {
				break
			} else {
				out2.push(str2[i])
			}
		}
	}

  return [out1, out2]
}

characterDeleting('Bryan Martinez', 'Samuel Zelaya')
console.log(
	characterDeleting(
		'If everybody minded their own business, the world would go around a great deal faster than it does.',
		'"Where should I go?" -Alice. "That depends on where you want to end up." - The Cheshire Cat.'
	)
)

module.exports = characterDeleting