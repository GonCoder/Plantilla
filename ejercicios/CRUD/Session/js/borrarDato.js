"use strict"

function borrarDato(clave) {
    console.log("Borrando este dato...")

    sessionStorage.removeItem(clave)

    console.log("Session borrado: ", sessionStorage);

    mostrarDatos();
}