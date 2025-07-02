"use strict"

function grabarDato(clave, valor) {
    console.log("Grabando dato...")

    localStorage.setItem(clave, valor)
    console.log("Storage creado: ", localStorage);
}