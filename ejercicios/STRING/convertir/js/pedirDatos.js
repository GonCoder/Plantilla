"use strict"

async function pedirDatos() {
    const post = aleatorioRango(1,100)
    
    return (await fetch (`https://jsonplaceholder.typicode.com/posts/${post}`)).json();

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

}