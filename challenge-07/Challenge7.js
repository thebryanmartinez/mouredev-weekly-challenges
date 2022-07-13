/* Español
 * Reto #7
 * CONTANDO PALABRAS
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */

/* English
* Challenge #7
* COUNTING WORDS
* Difficulty: MEDIUM
*
* Statement: Create a program that counts how many times each word is repeated and that shows the final count of all of them.
* - Punctuation marks are not part of the word.
* - A word is the same even if it appears in upper and lower case.
* - It is not possible to use functions of the language that resolve it automatically.
*/

const wordsCounter = (text) => {

  let resultObject = {}
  text = text.replace(/\p{P}/gu, "")
  text = text.toUpperCase().split(' ')
  
  for(let i = 0; i <= text.length; i++) {
        
  }

  return resultObject
}

console.log(wordsCounter('hello[ world] hello! world hello.'))

module.exports = wordsCounter