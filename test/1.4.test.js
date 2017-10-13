const expect  = require('chai').expect;
const { nsyncMutable, sludgeBubbleMutable } = require('../1.4/1.4.1.js')
const { nsyncImmutable, sludgeBubbleImmutable } = require('../1.4/1.4.2.js')
const { newHaircuts } = require('../1.4/1.4.3.js')
//These are unit tests. You can use unit tests to make sure you don't
//accidentally break a function as your code gets more complex. 
//Here we're using a testing library called chai... you can find the
//documentation at http://chaijs.com/  

describe('Session 1.4', () => {
  describe('1.4.1 Nsync and Sludge Bubble Mutable', () => {
    it('Should have same values for Nsync and Sludge Bubble', () => {
      expect(nsyncMutable).to.deep.equal(sludgeBubbleMutable);
    });
  });

  describe('1.4.2 Nsync and Sludge Bubble Immutable', () => {
    it('Should have different values for Nsync and Sludge Bubble', () => {
      expect(nsyncImmutable).to.not.deep.equal(sludgeBubbleImmutable);
    });
  });

  describe('1.4.3 Maps over avaliable Haircut', () => {
    it('Should output lowerCase array', () => {
      expect(newHaircuts).to.deep.equal([
        'short',
        'mullet',
        'pompador',
        'flock of seagulls'
      ]);
    });
  });
});
