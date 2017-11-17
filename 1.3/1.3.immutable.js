//run this script by typing 'npm run 1.3.immutable'
//This script will automatically re run every time you change something
//To stop is running press'ctrl+c'
//test this script (and all scripts) by typing 'npm test'

//This script is the immutable version of 1.3. 
//What immutable means here is that in this example 
//no data (like nync.justin) is ever overwritten, even though it appears it is
//A little confusing for sure, but we'll come to it next lesson. In the mean time
//have a look through the code and the notes and see what you can work out.

const haircut= (person, newHaircut) => {

  //in this case we return a whole new object. 
  //the reason person is in brackets as [person] is due to some JavaScript weirdness
  //In order to use a argument as a key it needs be
  //differentiated from the string version
  //For example this will return { justin: 'short' }
  //which is what we want
  //Without the brackets it will return { person : 'short' }
  //which we don't want

  return  { [person]: newHaircut.toLowerCase() }
};

//let works like const but lets you rassign the same name to a new object
//you should always favour cost over let. 
//We're going to start 1.4 talking about the difference

let nsync = {
  justin: 'frosted tips',
  lance: 'blonde gel',
  joey: 'dyed red',
  chris: 'platted dreads',
  jc: 'classic gel',
};

console.log('Old State: \n', nsync);
console.log('\n')

//Object assign combines objects togther
//in this case we make a new empty object, 
//and we copy the new objects created by 
//haircut in. You can read about object assign here 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

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
nsync = makeNewNsync();

console.log('New State: \n', nsync);


module.exports = { nsyncImmutable: nsync };
