(function() {

  var $input = document.getElementById('input');
  var number, display, operator, result;

  document.getElementById('table').addEventListener('click', handleClick);

  function initialize() {
    display = '';
    number = operator = result = null;
    renderDisplay();
  }
  
  function renderDisplay(event) {
    var text = result || display || '0';
    $input.textContent = text;
    if (result) {
      display = '';
      op = number = result = null;
    }
  }

  function handleClick(event) {
    var $clickedElement = event.target.textContent;  
    renderDisplay();    
    if ($clickedElement === 'AC') return initialize();
    if ($clickedElement === '+') return getOperator(add);
    if ($clickedElement === '-') return getOperator(subtract);
    if ($clickedElement === 'x') return getOperator(multiply);
    if ($clickedElement === '/') return getOperator(divide);
    if ($clickedElement === '=') {
      if (!operator || !number) return;
      result = operator(parseFloat(number), parseFloat($input.textContent));
    }
    display += $clickedElement;
    renderDisplay(event);
  }

  function getOperator(oper) {
    if (!$input) return;
    if (operator && number) {
      number = operator(parseFloat(number), parseFloat($input.textContent));
    }
    if (!operator) number = display;
    operator = oper;
    display = '';
  }


  // *** Operator functions ***
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