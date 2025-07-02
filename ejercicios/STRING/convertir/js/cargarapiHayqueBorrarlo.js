"use strict"

function cargarApi(){
    let comentario = aleatorio()
    let url = `htpps://jsonplaceholder.typicode.com/comments/${comentario}`
    fetch(url);
    
}