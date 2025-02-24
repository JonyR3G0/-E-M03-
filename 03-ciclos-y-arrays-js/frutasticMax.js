// Problema: Clasificación de Frutas
// Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// Instrucciones para resolver el problema:
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo también (for/while).


//declaro array llamado frutas
let frutas = [
    {
        nombre: "manzana",
        color: "verde"
    },
    {
        nombre: "manzana",
        color: "rojo"
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
    },
    {
        nombre: 'pepino',
        color: 'verde'
    },
    {
        nombre: 'maracuja',
        color: 'verde'
    },
    {
        nombre: 'uva',
        color: 'morado'
    },
    {
        nombre: 'melon',
        color: 'naranja'
    },
    {
        nombre: 'Arcoiris',
        color: 'Arcoiris'
    }
]

//Estetica
console.log('|| ---------------------------> 🔁 Implementacion con ciclo for 🔁 <-------------------------- ||')
console.log("..................................... Lista de frutas ............................................")

//Recorremos el array uno por uno para imprimir las propiedades de cada elemento en la lista
for (let i = 0; i < frutas.length; i++) {
    const Element = frutas[i];
    console.log(`${i+1}. ${Element.nombre} es color ${Element.color}`)
}

//Asignamos las variables fuera del ciclo for para que retengan su valor
let verde = 0;
let rojo = 0;
let morado = 0;
let naranja = 0;
let desconocido =0;


//Recorre todo el array para separar las frutas por color 
for (let i = 0; i < frutas.length; i++) {
    const colorDis = frutas[i];

//Si la propiedad colo coincide con los terminos asignados aumenta en uno el valor de la variable contadora
    if(colorDis.color === 'verde'){
        verde++
    }
    else if(colorDis.color === 'rojo'){
        rojo++
    }
    else if(colorDis.color === 'morado'){
        morado++
    }
    else if(colorDis.color === 'naranja'){
        naranja++
    }
    else{
        desconocido++
    }
}

console.log('|| --------------> 🌈 Cantidad de frutas por color 🌈 <--------------- ||')
console.log(`Frutas rojas: ${rojo} Frutas moradas: ${morado} Frutas verdes: ${verde} Frutas naranjas: ${naranja} Frutas de color desconocido: ${desconocido}`)

//espacio

console.log("")

// -----------------> Ahora con ciclo While <------------------ //

console.log("|| ------------------------> 🔁 Implementacion con ciclo while 🔁 <----------------------------- ||")
console.log("........................................ Lista de frutas ...........................................")

//variable de control, fuera de la logica de comparacion para evitar sobre-escrituras
let contadorW = 0;

//Descubri que si no hace match la cantidad de lista, falla el codigo, aunque esperaria que imprimiera una ultima variable NULL
while (contadorW < frutas.length) {
    const Elementw = frutas[contadorW];
    console.log(`${contadorW+1}. ${Elementw.nombre} es color ${Elementw.color}`)
    contadorW++
}

//reseteamos las variables de control para no desperdiciar variables
contadorW = 0
verde = 0;
rojo = 0;
morado = 0;
naranja = 0;
desconocido =0;

//Recorre todo el array para separar las frutas por color 
while(contadorW < frutas.length) {
    const colorDis = frutas[contadorW];

//Si la propiedad colo coincide con los terminos asignados aumenta en uno el valor de la variable contadora
    if(colorDis.color === 'verde'){
        verde++
    }
    else if(colorDis.color === 'rojo'){
        rojo++
    }
    else if(colorDis.color === 'morado'){
        morado++
    }
    else if(colorDis.color === 'naranja'){
        naranja++
    }
    else{
        desconocido++
    }

    //sumamos a la variable de control
    contadorW++
}

//imprimimos 
console.log('|| --------------> 🌈 Cantidad de frutas por color 🌈 <--------------- ||')
console.log(`Frutas rojas: ${rojo} Frutas moradas: ${morado} Frutas verdes: ${verde} Frutas naranjas: ${naranja} Frutas de color desconocido: ${desconocido}`)

//頑張れました！！