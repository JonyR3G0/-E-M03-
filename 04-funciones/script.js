// Instrucciones para resolver el problema:
// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído

// -------------> CALCULADORA DE SUMAS <-----------------
// let dat1 = Number(prompt('num1'))
// let dat2 = Number(prompt('num2'))

// function suma (numero1, numero2) {
//     let total = numero1 + numero2
//     console.log(total)
//     return `El resultado de la suma es: ${total}`
// }

// alert(suma (dat1,dat2))

//-------------> Calculadora de sumas *ENDS* <---------------

//Capturo elementos del DOM
const librosOutput = document.querySelector("#librosOutput");
const librosInput = document.querySelector("#librosInput");
const agregarBttn = document.querySelector("#agregarBttn");

//Creo un array vacio
let librosLeidos = [];

//Lee el value del input librosInput, hace un push al array y llama a la funcion mostrarLibrosLeidos
function agregarLibro() {
    if (librosInput.value === '') {
        alert("Por favor, no introduzca campos vacios");
    }
    else {
        let libroNuevo = librosInput.value;
        librosLeidos.push(libroNuevo);
        librosInput.value = "";
        mostrarLibrosLeidos();
    }
}

function mostrarLibrosLeidos() {
    const librosFormateado = `<li>${librosLeidos[librosLeidos.length - 1]}</li>`;
    librosOutput.innerHTML += librosFormateado;
}

//Event listener que llama a la funcion agregar libro
agregarBttn.addEventListener("click", agregarLibro);
