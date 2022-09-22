const forLoop = () => {
  for(let i = 1; i <= 100; i++){
    console.log(i)
  }
}

const whileLoop = () => {
  let i = 1;
  while(i <= 100){
    console.log(i)
    i++
  }
}

const doWhileLoop = () => {
  let i = 1;
  do {
    console.log(i)
    i++
  } while(i <= 100)
}

forLoop()
whileLoop()
doWhileLoop()

module.exports = { forLoop, whileLoop, doWhileLoop }