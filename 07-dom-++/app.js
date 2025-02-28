// 3 pasos
// capturar variables
// crear funcion
// evento

//Busca la id addbutton y la captura en la variable addb button
const addButton = document.querySelector("#addButton")

// Esta variable de control tiene que estar en scope global para que funcione.
let e = false

//podemos verificar si esta bien conectado con un tradicional console.log
function agregarCarrito (){

//Comprobar clases

    //.clasList devuelve un DOM token list, es una lista de elementos del DOM enfocado en los valores de las clases.
    console.log( addButton.classList )
    //el metodo (Array.from()) crea arrays desde listas o lementos que son similares
    console.log( Array.from(addButton.classList) )
    //(tambien esta el ...addButton.classList para retornar un array, incluso es mas usado pero es mas abstracto)
    //investigar metodos que alteran estructuras de arrays

// modificar clases

    //El metodo .add agrega todas las clases que queramos, separadas entre comas.
   // addButton.classList.add('btn-green')
    //y su paralelo .remove
   // addButton.classList.remove('btn-blue')

    //para modificar texto podemos acceder al texto con el metodo inner text y text content
   // addButton.textContent = 'Agregado'

    //Queremos hacer que se pueda de-seleccionar las clases, podemos hacer una estructura condicional, pero hay un metodo llamado .toggle que esta dise;ado para este caso.

    //sirve pero para elementos simples, porque no puede aceder al texto
    addButton.classList.toggle('btn-green')

    //la condicion debe ser true para ejecutarse
    if ( e ) {
        addButton.textContent = "Add"
        e = false
    }
    else{
        addButton.textContent = 'Agregado'
        e = true
    }

}

//Addeventlistener es un metodo, pide 2 parametros, lo que escucha y la funcion que se va a ejecutar al cumplirse el primer evento
addButton.addEventListener('click', agregarCarrito)