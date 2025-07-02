"use strict"

console.log("Me ejecuto antes del código asíncrono");

// async function call(){
//     const resolve1 = await recibirDatos(1);
//     console.log(resolve1)
//     const resolve2 = await recibirDatos(2);
//     console.log(resolve2)

// }

// call();

recibirDatos(1);
recibirDatos(2);

console.log("Demuestro que me ejecuto antes del código asíncrono");