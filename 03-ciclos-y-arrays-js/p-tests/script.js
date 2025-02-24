// Usaremos un ciclo para interactuar con la pagina ( en este caso una pregunta)

// let capital = prompt('Cual es la capital de Japon?')

// while ( capital != 'tokyo') {
    
//     console.log('Respuesta incorrecta')
//     capital = prompt('Cual es la capital de Japon?')
// }

//Search the regular expression to normalice characters ``

// let numero = 1

// while ( numero <= 1000 ) {
//     console.log( `7x${numero}=${7*numero}`)
//     numero++    
// }

//Inicializador, condicion, iterador.

// for(let i = 0; i<=10; i++){

//     console.log(`9x${i}=${i*9}`)

// }

              //arrays

// let colores = ['Rojo', 'Azul', 'verde', 'naranja']

// for (let i = 0; i < colores.length; i++) {

//     console.log(`${i+1}. ${colores[i]}`)
    
// }

// array de objeto

let frutas = [
    {
        nombre: "manzana",
        color: "verde"
    },
    {
        nombre: "fresa",
        color: "rojo"
    },
    {
        nombre: "mora",
        color: "morado"
    },
    {
        nombre: "limón",
        color: "verde"
    }
]

for (let i = 0; i < frutas.length; i++) {
    const Element = frutas[i];
    //console.log(`${i+1}. ${Element.nombre}`)
    
    if (Element.color === "verde") {
        console.log(Element.nombre)
    }
}