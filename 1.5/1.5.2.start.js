const haircut = (person, newHaircut) => {
  return  { [person]: newHaircut.toLowerCase() }
};

const nsync = {
  justin: 'frosted tips',
  lance: 'blonde gel',
  joey: 'dyed red',
  chris: 'platted dreads',
  jc: 'classic gel',
};

//Get rid of this
nsync.justin = haircut('Short');
nsync.lance = haircut('Short');
nsync.joey = haircut('Short');
nsync.chris = haircut('Short');
nsync.jc = haircut('Short');

const giveGroupHaircut = (group) => {
  //Work in here
};




const result = giveGroupHaircut(nsync);
  
console.log('Old State: \n', nsync);
console.log('\n')
console.log('New State: \n', result);

module.exports = { objectReduceResult: result };
