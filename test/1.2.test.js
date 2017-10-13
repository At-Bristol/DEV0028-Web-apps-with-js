const expect  = require('chai').expect;
const { sayHello, timesThree, timesThreeRepeating, noReturn } = require('../1.2/1.2.js')

//These are unit tests. You can use unit tests to make sure you don't
//accidentally break a function as your code gets more complex. 
//Here we're using a testing library called chai... you can find the
//documentation at http://chaijs.com/   

describe('Sesison 1.2', () => {
  describe('Hello World', () => {
    it('Should say Hello World', () => {
    expect(sayHello()).to.equal('Hello World')
    });
  });

  describe('No Return', () => {
    it('Should return undefined', () => {
      expect(noReturn()).to.equal(undefined)
    });
  });

  describe('Times Three', () => {
    it('Should multiply input by 3', () => {
      expect(timesThree(3)).to.equal(9)
    });
  });

  describe('Times Three Repeating', () => {
    it('Should multiply input by 3 recursively', () => {
      expect(timesThreeRepeating(3,10000)).to.be.at.least(10000)
    });
  });
});
