"use strict"

function todoMinusculas() {
    texto.value = texto.value.toLowerCase();
}

function primeraMinuscula(){
    const palabras = texto.value.split(" ");
    for(let i in palabras) {
        palabras[i] = palabras[i].charAt(0).toLowerCase() + palabras[i].substring(1);
    }
    texto.value = palabras.join(" ")
}

function ultimaMinuscula(){
    const palabras = texto.value.split(" ");
    for(let i in palabras) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1 ) + palabras[i].charAt(palabras[i].length-1).toLowerCase();
    }
    texto.value = palabras.join(" ")
}

function vocalesMinusculas(){
    const caracteres = texto.value.split("");
    for(let i in caracteres) {
        if (caracteres[i]=="A"||caracteres[i]=="E"||caracteres[i]=="I"||caracteres[i]=="O"||caracteres[i]=="U"){
            caracteres[i] = caracteres[i].toLowerCase();
        }
        texto.value = caracteres.join("");
    }
    
}

function consonanteMinuscula(){
    const caracteres = texto.value.split("");
    for(let i in caracteres) {
        if (!(caracteres[i]=="a"||caracteres[i]=="e"||caracteres[i]=="i"||caracteres[i]=="o"||caracteres[i]=="u")){
            caracteres[i] = caracteres[i].toLowerCase();
        }
        texto.value = caracteres.join("");
    }
    
}