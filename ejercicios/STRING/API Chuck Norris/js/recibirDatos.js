"use strict"

async function recibirDatos() {
    try {
        const resultado = await pedirDatos();
       texto.value = resultado.value;
    } catch (error) {
        console.error(error);
        // return error;
    }

}