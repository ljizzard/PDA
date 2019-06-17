var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it can add two numbers test', function(){
    calculator.previousTotal = 4
    Total = calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  });

  it('can subtract a number test', function(){
    calculator.previousTotal = 7
    Total = calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  it('can multiply two numbers', function(){
    calculator.previousTotal = 5
    Total = calculator.multiply(3);
    assert.equal(15, calculator.runningTotal);
  });

  it ('can divide two numbers test', function(){
    calculator.previousTotal = 21
    Total = calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });

  it ('can concatenate multiple button clicks test', function(){
    calculator.previousTotal = "0"
    calculator.numberClick(4);
    calculator.numberClick(6);
    assert.equal(46, calculator.runningTotal);
  });

  it ('can chain multiple operations together test', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(5, calculator.runningTotal);

  });

  it ('can clear running total without affecting calculation test', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal);

  })



});
