"use strict"
function esPar(numero){
    return numero % 2 === 0
}

function pedirDatos(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let usuario;
        
            // const exito = true;
            // if (exito) {
            //     resolve("Datos obtenidos correctamente")
            // } else {
            //     reject("ERROR: datos no disponibles")
            // }
            if (esPar(id)){
                usuario = { id: id, nombre: "Gon", tlf: 123456789};
            }
            if (usuario) {
                resolve(usuario);
            } else {
                reject("ERROR: datos no disponibles")
            }
        }, 2000);
    });

}