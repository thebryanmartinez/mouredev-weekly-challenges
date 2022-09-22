const obstacleRace = require('./Challenge17')

test('Should return true', () => {
  expect(obstacleRace(['run', 'run', 'jump', 'run'], '__|_')).toBe(true)
})

test('Should return true', () => {
  expect(obstacleRace(['run', 'run', 'jump', 'run', 'jump', 'run', 'run', 'jump'], '__|_|__|')).toBe(true)
})
test('Should return true', () => {
  expect(obstacleRace(['run', 'run', 'jump', 'run', 'jump', 'jump', 'run'], '__|_|__')).toBe(false)
})

// To run test, execute: npm test -- Challenge17.test.js
