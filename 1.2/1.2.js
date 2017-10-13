//run this script by typing 'npm run 1.2'
//This script will automatically re run every time you change something
//To stop is running press'ctrl+c'
//test this script (and all scripts) by typing 'npm test'

const sayHello = () => {
  return 'Hello World'
};

const noReturn = (number) => {
  //this 'output' const is to show that without a return statement 
  //nothing comes out of this function, despite it being calculated 
  const output = number * 3;
};

const timesThree = (number) => {
  return number * 3
};

const timesThreeRepeating = (number, max) => {
  if (number > max) return number
  return timesThreeRepeating(
    timesThree(number),  max
  );
};

//The following hasn't been taught yet but 
//what it's doing is making the above functions
//avaliable to other files. In this case I'm 
//using module.exports to use these functions in the
//test folder in which I check the functions are 
//working as I expect. You can see this yourself by
//running 'npm test' in the terminal

module.exports = {
  sayHello,
  noReturn,
  timesThree,
  timesThreeRepeating,
}
