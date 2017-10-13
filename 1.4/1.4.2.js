//This script shows immutable objects working.

const haircut= (person, newHaircut) => {
  return  { [person]: newHaircut.toLowerCase() }
};

//let works like const but lets you rassign the same name to a new object
//you should always favour cost over let.

let nsync = {
  justin: 'frosted tips',
  lance: 'blonde gel',
  joey: 'dyed red',
  chris: 'platted dreads',
  jc: 'classic gel',
};

const makeNewNsync = () => (
  Object.assign({}, 
    haircut('justin','Short'),
    haircut('lance','Short'),
    haircut('joey','Short'),
    haircut('chris','Short'),
    haircut('jc','Short')
  )
)

//nsyc is reassigned to new object
sludgeBubble = makeNewNsync();

console.log('Nsync \n', nsync);
console.log('\n Sludge Bubble \n', sludgeBubble);

module.exports = { 
  nsyncImmutable: nsync,
  sludgeBubbleImmutable: sludgeBubble 
};
