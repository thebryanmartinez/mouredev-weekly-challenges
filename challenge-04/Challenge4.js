/* Español
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

/* English
 * Challenge #4
 * AREA OF A POLYGON
 * Difficulty: EASY
 *
 * Statement: Create A SINGLE FUNCTION (it is important that it is only one) that is capable of calculating and returning the area of a polygon.
 * - The function will receive by parameter only ONE polygon at a time.
 * - The supported polygons will be Triangle, Square and Rectangle.
 * - Prints the calculation of the area of a polygon of each type.
 */

const polygonArea = (base, height) => {
  // Variables
  let triangle = (base * height) / 2
  let square = (base == height) && base * height
  let rectangle = (base != height) && base * height

  /* square and rectangle explanation
    If the base and height are the same, then it will calculate the area of the square and state false on the rectangle variable
    If it's different, then calculates the rectangle and state false on the square variable
  */

  return {
    'Triangle': triangle,
    'Square': square,
    'Rectangle': rectangle
  }
}

console.log(polygonArea(4, 4))
console.log(polygonArea(12, 8))

module.exports = polygonArea