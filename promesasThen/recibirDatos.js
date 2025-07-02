"use strict"

function recibirDatos(id) {
    pedirDatos(id)
        .then(respuesta => {
            console.log("Datos de la Promesa");
            console.log(respuesta);
            console.log(`ID:${respuesta.id}`);
            console.log(`ID:${respuesta.nombre}`);
        })
        .catch(error => {
            console.log("Error de la Promesa");
            console.log(error)
        });

}