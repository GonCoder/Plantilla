"use strict"

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const entera = document.getElementById("entera");
const decimal = document.getElementById("decimal");
const raiz = document.getElementById("raiz");
const factorial = document.getElementById("factorial");
const logaritmo = document.getElementById("logaritmo");

boton.addEventListener("click", function (event) {
resultado.innerHTML = parseFloat(op1.value) + parseFloat(op2.value)

});