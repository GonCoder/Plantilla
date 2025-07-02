"use strict"

let intervalo = null;
let velocidad = 1000;
let offset = 200;

function iniciar() {
    if (intervalo == null) {
        intervalo = setInterval(aleatorio, velocidad);
    }
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

function acelerar() {
    if (intervalo != null) {
        clearInterval(intervalo);
        velocidad = velocidad - offset
        intervalo = setInterval(aleatorio, velocidad)
    }
}

function ralentizar() {
    if (intervalo != null) {
        clearInterval(intervalo);
        velocidad = velocidad + offset
        intervalo = setInterval(aleatorio, velocidad)
    }
}
