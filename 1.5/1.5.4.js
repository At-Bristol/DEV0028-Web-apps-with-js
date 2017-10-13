//Answer - Implementing map with reduce

//Note that we use the function form, i.e. function(array, function)
//Rather than the method form used by the native map function
//i.e. [x , y, z].function(function)
//This is just a style difference - broadly object orientated vs functional style
//You should prefer the function(array, function). The reasons why theres these two styles 
//go all the way back to the point where JavaScript was made to look like Java, and comes down to 
//a thing called 'prototypal inheritance' and though the idea's pretty good the syntax is annoying 
//if you're interesting fun fun function (again) has  pretty good video on it
//https://www.youtube.com/watch?v=YkoelSTUy7A&t=274s

const map = (array,func) => {
  return array.reduce((a, e) => {
    return a.concat([func(e)])
  }, [])
};

const avaliableHaircuts = [
  'Short',
  'Mullet',
  'Pompador',
  'Flock Of Seagulls'
];

const stringToLowerCase = (e) => {
  return e.toLowerCase()
};

const result = map(avaliableHaircuts, stringToLowerCase);

module.exports = {
  exampleResult:result,
};




