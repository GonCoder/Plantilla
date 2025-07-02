"use strict"

const caducidad = 1000;

if (navigator.cookieEnabled) {
    // Establece una cookie llamada "nombre" sin fecha de expiración (expira al cerrar el navegador)
    // document.cookie = "nombre=Gon; path=/";

    // Establece una cookie llamada "usuario" que expira el 23 de junio de 2025 a las 16:13 UTC
    // document.cookie = "usuario=pepo; expires=Mon, 23 Jun 2025 16:13:00 GMT; path=/";
    const nombre = document.getElementById("nombre");
    const valor = document.getElementById("valor");
    const guardar = document.getElementById("guardar");

    guardar.addEventListener("click", function() {
        grabarDato(nombre.value, valor.value);
        mostrarDatos();
        nombre.value = "";
        valor.value = "";
    })

    mostrarDatos();

} else {
    alert("El uso de cookies está desactivado");
}