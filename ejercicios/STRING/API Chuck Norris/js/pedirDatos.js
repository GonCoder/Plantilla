"use strict"

async function pedirDatos() {
    
    return (await fetch (`https://api.chucknorris.io/jokes/random?category=money,movie,science,travel,food`)).json();
  

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

}