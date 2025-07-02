"use strict"

function grabarDato(clave, valor) {
    console.log("Grabando dato...")

    sessionStorage.setItem(clave, valor)
    console.log("Session creado: ", sessionStorage);
}