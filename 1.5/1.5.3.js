
//Challenge - Implementing map with reduce
//Answer in 1.5.4

//This is pretty hard so I have set up some things to make it easier
//you can test if your solution is working by running npm test.
//If npm 1.5.3 is ticked you have been successful

//This function is used in the call to turn stuff lower case. 
//You could write it in the function argument as we have been doing
//with map, but I have split it out to make the call easier to read
const stringToLowerCase = (e) => {
  return e.toLowerCase()
}

//Here's the map function. Remember we want to return a new array that has 
//had func applied to each entry 
const map = (array,func) => {
  //step 1
  //run reduce on array so you can loop through the entires
  //you are going to have to use an optional second argument to reduce called inital value
  //(documentation here) =? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  //That inital value will need to be an empty array [].
  
  //step2
  //Use .concat on the accumiulator array to join the acculated array with the new entry.
  //This is the code for the new entry [func(e)] .This applys the function to the entry and then turns
  //the result into an array with a single entry. This means we can use it with concat

};

const avaliableHaircuts = [
  'Short',
  'Mullet',
  'Pompador',
  'Flock Of Seagulls'
];

//Here's the call. Notice the use of stringToLowerCase function which is declared above
//Also note I don't have () at the end of the function. This is because I don't actually 
//want the function to run here. I just want to pass it on to map
const result = map(avaliableHaircuts, stringToLowerCase);

console.log(result);

module.exports = {
  testResult: result,
};

