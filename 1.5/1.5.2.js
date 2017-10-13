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

const giveGroupHaircut = (group) => {
  return Object.keys(group).reduce((a, e) => {
    return Object.assign(a, haircut(e,'Short')); 
  }, {});
};

const result = giveGroupHaircut(nsync);

console.log('Old State: \n', nsync);
console.log('\n')
console.log('New State: \n', result);

module.exports = { objectReduceResult: result };
