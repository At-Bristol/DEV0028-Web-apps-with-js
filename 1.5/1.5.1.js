//1.5.1 - Simple example of reduce

const result = ['Short', 'Mullet', 'Pompador'].reduce((a ,e) => {
  return (a + e).toLowerCase();
});

module.exports = {
  reduceResult: result,
};
