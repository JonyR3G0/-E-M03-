// Instrucciones para resolver el problema:
// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído

// -------------> CALCULADORA DE SUMAS <-----------------
//     *(lo vimos en clase)
//
// let dat1 = Number(prompt('num1'))
// let dat2 = Number(prompt('num2'))

// function suma (numero1, numero2) {
//     let total = numero1 + numero2
//     console.log(total)
//     return `El resultado de la suma es: ${total}`
// }

// alert(suma (dat1,dat2))

//-------------> Calculadora de sumas *ENDS* <---------------

// ==========================>  Entregable de la clase de Funciones  <=======================

//Capturo elementos del DOM
//(El div donde voy a imprimir la salida)
const librosOutput = document.querySelector("#librosOutput");
//(El input de texto)
const librosInput = document.querySelector("#librosInput");
//El boton de agregar
const agregarBttn = document.querySelector("#agregarBttn");

//Creo un array vacio que se va a nutrir de la funcion agregar libro
let librosLeidos = [];

//Lee el value del input librosInput, hace un push al array y llama a la funcion mostrarLibrosLeidos
function agregarLibro(refresh) {

    //Se suele usar en formularios para evitar que se ejecute la accion por defecto (reload)
    refresh.preventDefault()

    //Logica para identificar si esta vacio o con un espacio el campo (luego lo quiero mejorar a que detecte cuando solo esta llena de espacios)
    if (librosInput.value === '' || librosInput.value === " ") {
        alert("Por favor, no introduzca campos vacios ( • ᴖ • ｡) ");
    }
    //Agrega el elemento (libro) a la lista
    else {
        //metodo push para agregar un elemento a la lista
        librosLeidos.push(librosInput.value)
        //resetea el campo
        librosInput.value = "";
        //llama a la funcion que imprime en el div
        mostrarLibrosLeidos();
    }
}

function mostrarLibrosLeidos() {
    //Concatena el formato en una funcion para agregar un elemento li al div
    const librosFormateado = `<li>${librosLeidos[librosLeidos.length - 1]}</li>`;
    //injecta al div con el metodo .innerHTML la fucion antes formateada
    // OJO me di cuenta que esto es vulnerable a injeccion de codigo HTML, asi que eso es un area de mejora, ver como puedo aplanar el texto para evitar injeccion de elementos.
    librosOutput.innerHTML += librosFormateado;
}

//Event listener que llama a la funcion agregar libro
agregarBttn.addEventListener("click", agregarLibro);