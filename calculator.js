let currentNumber = '0';
let previousNumber = '';
let operation = null;

function updateDisplay() {
  document.getElementById('display').textContent = currentNumber;
}

function appendNumber(num) {
  if (currentNumber === '0') {
    currentNumber = num;
  } else {
    currentNumber += num;
  }
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '0';
  previousNumber = '';
  operation = null;
  updateDisplay();
}

function setOperation(op) {
  if (operation !== null) {
    calculate();
  }
  previousNumber = currentNumber;
  currentNumber = '0';
  operation = op;
}

function add(a, b) {
  return a + b;
}

// BUG: This function adds instead of subtracting
// Fix: Change + to -
function subtract(a, b) {
  return a - b;
}

// BUG: This function divides instead of multiplying
// Fix: Change / to *
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error';
  }
  return a / b;
}

function calculate() {
  if (operation === null || previousNumber === '') {
    return;
  }

  const prev = Number.parseFloat(previousNumber);
  const current = Number.parseFloat(currentNumber);
  let result;

  switch (operation) {
    case '+':
      result = add(prev, current);
      break;
    case '-':
      result = subtract(prev, current);
      break;
    case '*':
      result = multiply(prev, current);
      break;
    case '/':
      result = divide(prev, current);
      break;
    default:
      return;
  }

  currentNumber = String(result);
  previousNumber = '';
  operation = null;
  updateDisplay();
}
