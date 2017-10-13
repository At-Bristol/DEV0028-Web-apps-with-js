const expect  = require('chai').expect;
const { nsyncMutable } = require('../1.3/1.3.js')
const { nsyncImmutable } = require('../1.3/1.3.Immutable.js')

//These are unit tests. You can use unit tests to make sure you don't
//accidentally break a function as your code gets more complex. 
//Here we're using a testing library called chai... you can find the
//documentation at http://chaijs.com/  

const desiredObject = { 
  justin: 'short',
  lance: 'short',
  joey: 'short',
  chris: 'short',
  jc: 'short' 
}

describe('Session 1.3', () => {
  describe('Haircut Mutable', () => {
    it('Should cut nsyncs hair', () => {
      expect(nsyncMutable).to.deep.equal(desiredObject);
    });
  });

  describe('Haircut Immutable', () => {
    it('Should cut nsyncs hair', () => {
      expect(nsyncImmutable).to.deep.equal(desiredObject);
    });
  });
});
