(function() {

  var input = document.getElementById('input');
  var number, display, operator, result;

  document.getElementById('table').addEventListener('click', handleClick);

  function initialize() {
    input = '';
    number = operator = result = null;
    displayInput();
  }
  
  function displayInput() {
    var display = number || result || 0;
    // display += clickedElement;
    input.textContent = display;
  }

  function getOperator(oper) {
    if (!input) return;
    number = input;
    operator = oper;
    input = '';
  }

  function handleClick(event) {
    var clickedElement = event.target.innerHTML;
    if (clickedElement === 'AC') initialize();
    if (clickedElement === '+') getOperator(add);
    if (clickedElement === '-') getOperator(subtract);
    if (clickedElement === '*') getOperator(multiply);
    if (clickedElement === '/') getOperator(divide);
    if (clickedElement === '=') {
      if(!operator || !number) return;
      result = operator(parseFloat(number), parseFloat(input));
    }
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

initialize();

}());