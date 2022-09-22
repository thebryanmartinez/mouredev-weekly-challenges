const rockPaperScissorsGame = games => {
	let playerOne = 0
	let playerTwo = 0

	games.map(game => {
		switch (game[0]) {
			case 'R':
				if (game[1] === 'S') playerOne++
				else if (game[1] === 'P') playerTwo++
				break

			case 'P':
				if (game[1] === 'R') playerOne++
				else if (game[1] === 'S') playerTwo++
				break

			case 'S':
				if (game[1] === 'P') playerOne++
				else if (game[1] === 'R') playerTwo++
				break
		}
	})

	if (playerOne > playerTwo) console.log('Player 1')
	else if (playerTwo > playerOne) console.log('Player 2')
	else console.log('Tie')
}

rockPaperScissorsGame([
	['R', 'P'],
	['S', 'R'],
	['P', 'R'],
	['S', 'P'],
	['P', 'R'],
	['S', 'R'],
])

module.exports = rockPaperScissorsGame
