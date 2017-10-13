const sayHello = () => {
  console.log('Hello world')
}

const awkwardSilence = () => {
  setTimeout(() => {
    makeExcuse()
  }, 3000)
}

const makeExcuse = () => {
  console.log('I have to go...')
}

const sayGoodbye = () => {
  console.log('Goodbye world')
}

sayHello();
awkwardSilence();
sayGoodbye();