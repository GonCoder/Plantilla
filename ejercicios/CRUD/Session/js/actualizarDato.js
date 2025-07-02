"use strict"

function actualizarDato(clave,valor){
    const campoClave = document.getElementById("nombre");
    const campoValor = document.getElementById("valor");

    campoClave.value = clave;
    campoValor.value = valor;
}