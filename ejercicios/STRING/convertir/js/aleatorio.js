"use strict";
let anterior = null;

function aleatorioRango(min, max) {
    let randomy;
    do {
        randomy = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomy === anterior);
    anterior = randomy;
    return randomy;
}

function aleatorio() {
    const aleatoriedad = aleatorioRango(1, 10);
    switch (aleatoriedad) {
        case 1: todoMayusculas(); break;
        case 2: todoMinusculas(); break;
        case 3: primeraMayuscula(); break;
        case 4: primeraMinuscula(); break;
        case 5: ultimaMayuscula(); break;
        case 6: ultimaMinuscula(); break;
        case 7: vocalesMayusculas(); break;
        case 8: vocalesMinusculas(); break;
        case 9: consonanteMayuscula(); break;
        case 10: consonanteMinuscula(); break;
        default: console.log("Número fuera de rango");
    }
}
