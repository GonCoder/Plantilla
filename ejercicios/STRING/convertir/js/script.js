"use strict"
const texto = document.getElementById("texto");

const botones = document.getElementsByClassName("boton");

for (let boton of botones){
    switch(boton.id){
        case "mayusculas": boton.addEventListener("click", todoMayusculas); break;
        case "minusculas": boton.addEventListener("click", todoMinusculas); break;
        case "primeraMayuscula": boton.addEventListener("click", primeraMayuscula); break;
        case "ultimaMayuscula": boton.addEventListener("click", ultimaMayuscula); break;
        case "primeraMinuscula": boton.addEventListener("click", primeraMinuscula); break;
        case "ultimaMinuscula": boton.addEventListener("click", ultimaMinuscula); break;
        case "vocalesMayusculas": boton.addEventListener("click", vocalesMayusculas); break;
        case "vocalesMinusculas": boton.addEventListener("click", vocalesMinusculas); break;
        case "consonanteMayuscula": boton.addEventListener("click", consonanteMayuscula); break;
        case "consonanteMinuscula": boton.addEventListener("click", consonanteMinuscula); break;
        case "aleatorio": boton.addEventListener("click", aleatorio); break;
        case "parar": boton.addEventListener("click", parar); break;
        case "rapido": boton.addEventListener("click", rapido); break;
        case "lento": boton.addEventListener("click", lento); break;
    }
}