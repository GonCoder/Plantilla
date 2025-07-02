"use strict"

function mostrarDatos() {
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";
    if (document.cookie && document.cookie.length > 0) {
        const cookies = document.cookie.split(";")

        cookies.forEach(function (cookie) {
            const fila = document.createElement("tr");
            const celdaNombre = document.createElement("td");
            const celdaValor = document.createElement("td");
            const celdaBorrar = document.createElement("td");
            const celdaActualizar = document.createElement("td");

            const [clave, valor] = cookie.split("=");

            celdaNombre.textContent = decodeURIComponent(clave.trim());
            celdaValor.textContent = decodeURIComponent(valor);

            const botonBorrar = document.createElement("button");
            const iconoBorrar = document.createElement("img");
            iconoBorrar.src = "img/delete.png";
            botonBorrar.textContent = "Borrar";
            botonBorrar.appendChild(iconoBorrar);
            botonBorrar.addEventListener("click", function () {
                borrarDato(clave.trim())
            })
            celdaBorrar.appendChild(botonBorrar);

            const botonActualizar = document.createElement("button");
            const iconoActualizar = document.createElement("img");
            iconoActualizar.src = "img/actualizar.png";
            botonActualizar.textContent = "Actualizar";
            botonActualizar.appendChild(iconoActualizar);
            botonActualizar.addEventListener("click", function () {
                actualizarDato(clave.trim(), valor)
                borrarDato(clave.trim())
            })
            celdaActualizar.appendChild(botonActualizar);

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaValor);
            fila.appendChild(celdaBorrar);
            fila.appendChild(celdaActualizar);
            cuerpo.appendChild(fila);

        })

    } else {
        cuerpo.innerHTML = "<tr><td colspan='3'>No hay cookies almacenadas</td></tr>"
    }
}