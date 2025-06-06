"use strict"

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

const btnOperaciones = document.getElementsByClassName("btn-operacion")
for (let btnOperacion of btnOperaciones) {
  btnOperacion.addEventListener("click", () => { realizarOperacion(btnOperacion.dataset.op) });
}

const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");



function realizarOperacion(id) {

  switch (id) {
    case "+":
      if (!validarOperandos()) return;
      texto.innerHTML = 'El resultado de la suma es: ';
      resultado.innerHTML = parseFloat(op1.value) + parseFloat(op2.value);
      break;
    case "-":
      if (!validarOperandos()) return;
      texto.innerHTML = 'El resultado de la resta es: ';
      resultado.innerHTML = parseFloat(op1.value) - parseFloat(op2.value);
      break;
    case "*":
      if (!validarOperandos()) return;
      texto.innerHTML = 'El resultado de la multiplicación es: ';
      resultado.innerHTML = parseFloat(op1.value) * parseFloat(op2.value);
      break;
    case "/":
      if (!validarOperandos()) return;
      texto.innerHTML = 'El resultado de la división es: ';
      resultado.innerHTML = parseFloat(op1.value) / parseFloat(op2.value);
      break;
    case "_.":
      if (!validarResultado()) return;
      const partes = resultado.innerHTML.toString().split(".");
      op1.value = partes[0] ? parseFloat(partes[0]) : 0;

      break;
    case "._":
      if (!validarResultado()) return;
      const partes2 = resultado.innerHTML.toString().split(".");
      op2.value = partes2[1] ? parseFloat("0." + partes2[1]) : 0;

      break;
    case "raiz":
      if (!validarResultado()) return;
      const valor = parseFloat(resultado.innerHTML);
      texto.innerHTML = "✅ Raíz cuadrada:";
      resultado.innerHTML = Math.sqrt(valor);

      break;
    case "log10":
      if (!validarResultado()) return;
      const valor10 = parseFloat(resultado.innerHTML);
      texto.innerHTML = "✅ Logaritmo base 10: ";
      resultado.innerHTML = Math.log10(valor10);
      break;
    case "loge":
      if (!validarResultado()) return;
      const valorloge = parseFloat(resultado.innerHTML);
      texto.innerHTML = "✅ Logaritmo base e: ";
      resultado.innerHTML = Math.log(valorloge);
      break;
    case "logn":
      if (!validarLogN()) return;
      texto.innerHTML = `✅ Logaritmo base ${op2.value}: `;
      resultado.innerHTML = Math.log(parseFloat(op1.value)) / Math.log(parseFloat(op2.value));
      break;
    case "logn":
      if (!validarLogN()) return;
      texto.innerHTML = `✅ Logaritmo base ${op2.value}: `;
      resultado.innerHTML = Math.log(parseFloat(op1.value)) / Math.log(parseFloat(op2.value));
      break;
    case "aleatorio":
      texto.innerHTML = "✅ Número aleatorio entre 0 y 1: ";
      resultado.innerHTML = Math.random();
      break;
    case "aleatorio-rango":
      if (!validarRango()) return;
      const min = parseFloat(op1.value);
      const max = parseFloat(op2.value);
      const aleatorio = Math.random() * (max - min) + min;
      texto.innerHTML = `✅ Aleatorio entre ${min} y ${max}: `;
      resultado.innerHTML = aleatorio.toFixed(0); // quitamos los decimales

      break;
    case "intercambiar":
      let temporal;
      temporal = op1.value;
      op1.value = op2.value;
      op2.value = temporal;
      break;
    case "aleatorio-letram":
      const codigo = aleatorioLetram();
      const letra = String.fromCharCode(codigo);
      texto.innerHTML = `✅ Letra aleatoria generada: `;
      resultado.innerHTML = letra;
      break;
    case "aleatorio-letraM":
      const codigoM = aleatorioLetraM();
      const letraM = String.fromCharCode(codigoM);
      texto.innerHTML = `✅ Letra aleatoria generada: `;
      resultado.innerHTML = letraM;
      break;

  }

}
// Funciones auxiliares para los randoms
const aleatorioRango = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Nueva función con exclusiones
const aleatorioLetraM = () => {
  return aleatorioRango(65, 90);
};

// Nueva función con exclusiones
const aleatorioLetram = () => {
  return aleatorioRango(97, 122);
};
