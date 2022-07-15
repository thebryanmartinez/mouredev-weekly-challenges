const millisecondsConverter = (days, hours, minutes, seconds) => {
  hours += days * 24
  minutes += hours * 60
  seconds += minutes * 60
  return seconds * 1000
}

console.log(millisecondsConverter(2, 18, 27, 6))

module.exports = millisecondsConverter
