var chai = require('chai');
var expect = chai.expect;
var Calculator = require('../src/calculator');

describe('Calculator', function(){

  it('should be able to store a single value', function(){
    Calculator.input(1);

    var equation = Calculator.showEquation();
    expect(equation[0]).to.equal(1);
  });

  it('should be able to handle mulitple inputted values', function(){
    Calculator.input(1);
    Calculator.input(1);

    var equation = Calculator.showEquation();
    expect(equation[0]).to.equal(11);
  });

  it('should be able to add two values', function(){
    Calculator.input(1);
    Calculator.input('+');
    Calculator.input(1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(2);
  });

  it('should be able to minus two values', function(){
    Calculator.input(2);
    Calculator.input('-');
    Calculator.input(1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(1);
  });

  it('should be able to handle multiple operators', function(){
    Calculator.input(1);
    Calculator.input('+');
    Calculator.input(1);
    Calculator.input('+');
    Calculator.input(1);
    Calculator.input('+');
    Calculator.input(1);
    Calculator.input('+');
    Calculator.input(1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(5);
  });

  it('should ignore non numeric / operator characters', function(){
    Calculator.input("a");

    var equation = Calculator.showEquation();
    expect(equation[0]).not.to.equal('a');
  });

  it('should be able to process max integers', function(){
    Calculator.input(Number.MAX_VALUE);
    Calculator.input('+');
    Calculator.input(1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(Number.MAX_VALUE + 1);
  });

  it('should be able to process min integers', function(){
    Calculator.input(Number.MIN_VALUE);
    Calculator.input('-');
    Calculator.input(1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(Number.MIN_VALUE - 1);
  });

  it('should be able to plus negative numbers', function(){
    Calculator.input(-1);
    Calculator.input('+');
    Calculator.input(-1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(-2);
  });

  it('should be able to minus negative numbers', function(){
    Calculator.input(-1);
    Calculator.input('-');
    Calculator.input(-1);

    var result = Calculator.evaluateEquation();
    expect(result).to.equal(0);
  });

  // it('should be robust to handle lots of operators being added', function(){
  //   Calculator.input('+');
  //   Calculator.input('-');
  //
  //   var equation = Calculator.showEquation();
  //   expect(equation[0]).to.equal('-');
  // });

  it('should be able to delete the last digit', function() {
    Calculator.input(1);
    Calculator.input(1);
    Calculator.deletePrevious();

    var equation = Calculator.showEquation();
    expect(equation[0]).to.equal(1);
  });

  it('should clear an equation', function(){
    Calculator.input(1);
    Calculator.input(1);

    Calculator.clearEquation();

    var equation = Calculator.showEquation();
    expect(equation).to.deep.equal([]);
  });

  afterEach(function(){
    Calculator.clearEquation();
  });

});
