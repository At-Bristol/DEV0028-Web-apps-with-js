const avaliableHaircuts = [
  'Short',
  'Mullet',
  'Pompador',
  'Flock Of Seagulls'
];

//Notice I'm assigning the result of map to a new const rather than using let
//This is 99.9 percent of the time the way you should work

const newHaircuts = avaliableHaircuts.map(e => {
  return e.toLowerCase()
});

console.log(newHaircuts)

module.exports = { newHaircuts };
