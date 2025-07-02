"use strict"

async function recibirDatos() {
    try {
        const resultado = await pedirDatos();
       texto.value = resultado.title;
    } catch (error) {
        console.error(error);
        // return error;
    }

}