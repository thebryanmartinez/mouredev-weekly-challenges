const isPalindrome = wordOne => {
  wordOne = wordOne.toLowerCase()
	const wordArray = wordOne.split('').reverse().join('')
  if(wordOne === wordArray) return true
  return false
}

console.log(isPalindrome('Bryan'))
console.log(isPalindrome('Radar'))

module.exports = isPalindrome