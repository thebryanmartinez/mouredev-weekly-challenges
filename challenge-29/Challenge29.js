const orderingArrays = (array, order) => {
	let newArray = []
	if (order === 'Asc') {
		newArray = array.sort()
	} else if (order === 'Desc') {
		newArray = array.sort().reverse()
	} else {
		return 'Check the ordering parameter if is written correctly'
	}

	return newArray
}

console.log(orderingArrays([1, 4, 7, 2, 4, 3], 'Desc'))
