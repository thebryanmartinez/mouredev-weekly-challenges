/* Español
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

/* English
 * Challenge #2
 * THE FIBONACCI SEQUENCE
 * Difficulty: HARD
 *
 * Statement: Write a program that prints the first 50 numbers of the Fibonacci sequence starting at 0.
 * The Fibonacci series is made up of a succession of numbers in which the next one is always the sum of the previous two.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

const fibonacciSecuence = () => {
  // Variables
  let sequence = [0, 1], number = 0;

  /* For loop explanation:
    In the variable number, it sums the number of the index of the array sequence with its next index
    Making it in the first loop 0 + 1
    Then this number is push into the sequence array and starting the loop again
    Once the number is greater than 50, the function returns the sequence array which has the fibonacci sequence
  */
  for (let i = 0; true; i++) {
    number = sequence[i] + sequence[i + 1]
    if (number >= 50) return sequence
    sequence.push(number)
  }
}

module.exports = fibonacciSecuence