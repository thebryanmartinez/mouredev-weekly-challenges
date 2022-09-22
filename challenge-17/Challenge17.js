const obstacleRace = (actions, track) => {
	const arrayTrack = track.split('')
	const actualTrackResult = []
	let willFinishTrack = true
	if (actions.length !== arrayTrack.length) {
		console.log('Actions and track are not the same length')
		return false
	}

	for (let i = 0; i < actions.length; i++) {
		switch (actions[i]) {
			case 'run':
				if (arrayTrack[i] === '_') actualTrackResult.push('_')
				else {
					actualTrackResult.push('x')
					willFinishTrack = false
				}
				break

			case 'jump':
				if (arrayTrack[i] === '|') actualTrackResult.push('|')
				else {
					actualTrackResult.push('/')
					willFinishTrack = false
				}
				break
		}
	}

	console.log(`Track: ${track}\nResult of track: ${actualTrackResult.join('')}`)

	return willFinishTrack
}

console.log(obstacleRace(['run', 'run', 'jump', 'run'], '__|_'))

module.exports = obstacleRace
