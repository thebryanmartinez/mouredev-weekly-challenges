/* Español
 * Reto #6
 * INVIRTIENDO CADENAS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

/* English
 * Challenge #6
 * INVERTING CHAINS
 * Difficulty: EASY
 *
 * Statement: Create a program that reverses the order of a text string without using language functions that do it automatically.
 * - If we passed "Hello world" it would return "dlrow olleH"
 */

const invertedChain = (textToReverse) => {
  // Variable
  let reversedChain = []

  /* Start the for loop in the last index of the textToReverse and substract it with every iteration
  Push into the reversedChain array letter by letter, back to front each letter of the textToReverse string */
  for(let i = textToReverse.length; i >= 0; i--){
    reversedChain.push(textToReverse[i])
  }

  // Join the letters to form the string together and return it
  return reversedChain.join('')
}

console.log(invertedChain('Hello world'))

module.exports = invertedChain