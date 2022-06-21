/* Español
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/* English
 * Challenge #0
 * THE FAMOUS "FIZZ BUZZ"
 * Difficulty: EASY
 * Statement: Write a program that displays on the console the numbers from 1 to 100 (both included and with a line break between each print), substituting the following:
 * - Multiples of 3 for the word "fizz".
 * - Multiples of 5 for the word "buzz".
 * - Multiples of 3 and 5 at the same time for the word "fizzbuzz".
 */

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    (i % 3 === 0 && i % 5 === 0) ? console.log('fizzbuzz') : (i % 3 === 0) ? console.log('fizz') : (i % 5 === 0) ? console.log('buzz') : console.log(`${i}`)
  }
}

fizzBuzz();