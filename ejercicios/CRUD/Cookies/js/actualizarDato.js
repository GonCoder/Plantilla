"use strict"

function actualizarDato(clave,valor){
    const campoClave = document.getElementById("nombre");
    const campoValor = document.getElementById("valor");

    campoClave.value = decodeURIComponent(clave);
    campoValor.value = decodeURIComponent(valor);
}