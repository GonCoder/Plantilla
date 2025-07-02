"use strict"

function borrarDato(clave) {
    console.log("Borrando este dato...")
    
    let fecha = new Date();
    fecha.setTime(fecha.getTime() - caducidad);

    document.cookie = encodeURIComponent(clave) 
    + ";expires=" + fecha.toUTCString + ";path=./;SameSite=Strict;Secure";
    mostrarDatos();
}