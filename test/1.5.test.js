const expect  = require('chai').expect;
const { reduceResult } = require('../1.5/1.5.1.js');
const { testResult } = require('../1.5/1.5.3.js');
const { exampleResult } = require('../1.5/1.5.4.js');
const { objectReduceResult } = require('../1.5/1.5.2.js')

const desiredObject = { 
  justin: 'short',
  lance: 'short',
  joey: 'short',
  chris: 'short',
  jc: 'short' 
}

describe('Session 1.5', () => {
  describe('1.5.1 Simple reduce example', () => {
    it('Should output lowercase hairsyles as string', () => {
      expect(reduceResult).to.equal('shortmulletpompador')
    });
  });

  describe('1.5.2 Reducing objects example', () => {
    it('Should output lowercase hairstyles', () => {
      expect(objectReduceResult).to.deep.equal(desiredObject)
    });
  });

  describe('1.5.3 Implements map using reduce - test', () => {
    it('Should output lowerCase array', () => {
      expect(testResult).to.deep.equal([
        'short',
        'mullet',
        'pompador',
        'flock of seagulls'
      ]);
    });
  });

  describe('1.5.3 Implements map using reduce - example', () => {
    it('Should output lowerCase array', () => {
      expect(exampleResult).to.deep.equal([
        'short',
        'mullet',
        'pompador',
        'flock of seagulls'
      ]);
    });
  });
});
