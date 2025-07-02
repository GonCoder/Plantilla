"use strict"

function grabarDato(clave, valor) {
    console.log("Grabando dato...")

    let fecha = new Date(); // fecha actual
    fecha.setTime(fecha.getTime() + caducidad);
    let fechaExpiracion = fecha.toUTCString();
    document.cookie = encodeURIComponent(clave) + "=" + encodeURIComponent(valor)
        + ";expires=" + fechaExpiracion
        + ";path=./;SameSite=Strict;Secure";
    console.log("Cookie Creada: ", document.cookie);
}