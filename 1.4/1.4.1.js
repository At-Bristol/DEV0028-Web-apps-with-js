//This script shows dangers of mutation.


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

const sludgeBubble = nsync;

sludgeBubble.justin = haircut('Short');

console.log('Nsync: \n', nsync);
console.log('SludgeBubble: \n', sludgeBubble);

module.exports = { 
  nsyncMutable: nsync,
  sludgeBubbleMutable: sludgeBubble 
};