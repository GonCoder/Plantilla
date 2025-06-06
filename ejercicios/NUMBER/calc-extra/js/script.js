"use strict";

const display = document.getElementById("display");

let expression = "";
let justEvaluated = false;

// Añade números o punto decimal
function appendNumber(value) {
  if (justEvaluated) {
    expression = "";
    justEvaluated = false;
  }
  expression += value;
  updateDisplay(expression);
}

// Añade operador (+, -, *, /)
function appendOperator(operator) {
  if (justEvaluated) justEvaluated = false;
  expression += operator;
  updateDisplay(expression);
}

// Resetea la calculadora
function resetCalculator() {
  expression = "";
  updateDisplay("0");
}

// Borra último carácter
function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay(expression || "0");
}

// Aplica porcentaje al valor actual
function applyPercentage() {
  try {
    const value = parseFloat(display.innerText);
    updateDisplay((value / 100).toString());
    expression = display.innerText;
  } catch {
    updateDisplay("Error");
  }
}

// Evalúa la expresión
function computeResult() {
  try {
    const result = eval(expression);
    updateDisplay(result);
    expression = result.toString();
    justEvaluated = true;
  } catch {
    updateDisplay("Error");
    expression = "";
  }
}

// Actualiza el contenido del display
function updateDisplay(value) {
  display.innerText = value;
}
