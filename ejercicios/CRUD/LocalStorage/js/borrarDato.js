"use strict"

function borrarDato(clave) {
    console.log("Borrando este dato...")

    localStorage.removeItem(clave)

    console.log("Storage borrado: ", localStorage);

    mostrarDatos();
}