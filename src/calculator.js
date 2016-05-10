var equation = [];

module.exports = {

  input: function(value){
    var previousValue = equation.length - 1;

    if(typeof value === 'number' || value === '+' || value === '-'){
      if(typeof equation[previousValue] == 'number' && typeof value != 'string'){
        equation[previousValue] = parseInt("" + equation[previousValue] + value);
      } else {
        equation.push(value);
      }
    }
  },

  deletePrevious: function(){
    var currentValue = equation[equation.length - 1].toString();

    currentValue = currentValue.substring(0, currentValue.length - 1);

    equation[equation.length - 1] = parseInt(currentValue);
  },

  evaluateEquation: function(){
    return eval(equation.join(' '));
  },

  showEquation: function(){
    return equation;
  },

  clearEquation: function(){
    equation = [];
  }

}
