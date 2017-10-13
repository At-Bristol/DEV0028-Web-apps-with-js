//run this script by typing 'npm run 1.3'
//This script will automatically re run every time you change something
//To stop is running press'ctrl+c'
//test this script (and all scripts) by typing 'npm test'

const haircut = (newHaircut) => {
  return newHaircut.toLowerCase();
};

const nsync = {
  justin: 'frosted tips',
  lance: 'blonde gel',
  joey: 'dyed red',
  chris: 'platted dreads',
  jc: 'classic gel',
};

//I log both the start and end state here. 
//The \n simply makes a new line in the console

console.log('Old State: \n', nsync);
console.log('\n')

nsync.justin = haircut('Short');
nsync.lance = haircut('Short');
nsync.joey = haircut('Short');
nsync.chris = haircut('Short');
nsync.jc = haircut('Short');

console.log('New State: \n', nsync);

module.exports = { nsyncMutable: nsync };