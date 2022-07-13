const polygonArea = (base, height) => {
	const triangle = (base * height) / 2
	const square = base === height && base * height
	const rectangle = base !== height && base * height

	return {
		Triangle: triangle,
		Square: square,
		Rectangle: rectangle,
	}
}

console.log(polygonArea(4, 4))
console.log(polygonArea(12, 8))

module.exports = polygonArea
