"use strict"

async function recibirDatos(id) {
    try {
        const resultado = await pedirDatos(id);
        console.log("Datos de la promesa async");
        console.log(`ID:${resultado.id}`);
        console.log(`Nombre:${resultado.nombre}`);
        console.log(`TLF:${resultado.tlf}`);
        console.log(resultado);
        // return resultado;
    } catch (error) {
        console.log("Error de la promesa, esto es catch");
        console.log(error);
        // return error;
    }

}