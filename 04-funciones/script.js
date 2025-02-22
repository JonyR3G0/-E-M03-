//declarar funcion

// let dat1 = Number(prompt('num1'))
// let dat2 = Number(prompt('num2'))

// function suma (numero1, numero2) {
//     let total = numero1 + numero2
//     console.log(total)
//     return `El resultado de la suma es: ${total}`
// }

// alert(suma (dat1,dat2))

//Que es hoisting && que es el scope???

let librosLeidos = []

let libroNuevo = prompt("Agrega libros a tu lista")

while ( libroNuevo != null ) {
    librosLeidos.push(libroNuevo)
    libroNuevo = prompt("Agrega libros a tu lista")
}

function agregarLibro (libro) {
    librosLeidos.push(libro)
    return libro
    mostrarLibrosLeidos(librosLeidos)
}

function mostrarLibrosLeidos (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])      
    }    
}
