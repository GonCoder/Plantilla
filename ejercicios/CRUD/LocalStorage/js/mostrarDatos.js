"use strict"

function mostrarDatos() {
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";
    
    const claves = Object.keys(localStorage);

    if (claves.length > 0) {

        claves.forEach(function (clave) {
            const fila = document.createElement("tr");
            const celdaNombre = document.createElement("td");
            const celdaValor = document.createElement("td");
            const celdaBorrar = document.createElement("td");
            const celdaActualizar = document.createElement("td");

            const valor = localStorage.getItem(clave);

            celdaNombre.textContent = clave;
            celdaValor.textContent = valor;

            const botonBorrar = document.createElement("button");
            const iconoBorrar = document.createElement("img");
            iconoBorrar.src = "img/delete.png";
            botonBorrar.textContent = "Borrar";
            botonBorrar.appendChild(iconoBorrar);
            botonBorrar.addEventListener("click", function () {
                borrarDato(clave)
            })
            celdaBorrar.appendChild(botonBorrar);

            const botonActualizar = document.createElement("button");
            const iconoActualizar = document.createElement("img");
            iconoActualizar.src = "img/actualizar.png";
            botonActualizar.textContent = "Actualizar";
            botonActualizar.appendChild(iconoActualizar);
            botonActualizar.addEventListener("click", function () {
                actualizarDato(clave, valor);
                borrarDato(clave);
            })
            celdaActualizar.appendChild(botonActualizar);

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaValor);
            fila.appendChild(celdaBorrar);
            fila.appendChild(celdaActualizar);
            cuerpo.appendChild(fila);

        })

    } else {
        cuerpo.innerHTML = "<tr><td colspan='3'>No hay storage almacenado</td></tr>"
    }
}