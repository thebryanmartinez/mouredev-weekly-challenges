/* Español
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

/* English
 * Challenge #1
 * IS IT AN ANAGRAM?
 * Difficulty: MEDIUM
 *
 * Statement: Write a function that receives two words (String) and returns true or false (Boolean) depending on whether or not they are anagrams.
 * An Anagram consists of forming a word by rearranging ALL the letters of another initial word.
 * It is NOT necessary to check that both words exist.
 * Two exactly the same words are not an anagram.
 */

const isAnAnagram = (firstWord, secondWord) => {
  // Variables
  let isLetterInside = false, isWordAnagram = false;
  
  // Words to uppercase
  [firstWord, secondWord] = [firstWord.toUpperCase(), secondWord.toUpperCase()]
  
  // If both words equal returns false as a response 
  if (firstWord === secondWord) return false
  
  // Splitting of words by characters
  [firstWord, secondWord] = [firstWord.split(''), secondWord.split('')]
  
  /* For loop explanation: 
    Checks if every letter of the second word exists inside the first word
    If it does, isLetterInside becomes true, else it continues as false
    At the end of the second loop, if isletterInside is true, isWordAnagram becomes true 
    and continues until each letter is inside the other word and isLetterInside always returns true at the end of the second loop
    Resulting that if isWordAnagram is always true at the end of the loop, the function returns true as a response
    If at the end of the second loop isLetterInside remains false, isWordAnagram becomes false and returns false as a response 
  */
  for (let i = 0; i < secondWord.length; i++){
    isLetterInside = false
    for(let j = 0; j < firstWord.length; j++){
      if(firstWord[j] === secondWord[i]){
        isLetterInside = true
        break;
      }
    }
    isLetterInside ? isWordAnagram = true : isWordAnagram = false;
    if(!isWordAnagram) return false
  }
  return true
}

module.exports = isAnAnagram