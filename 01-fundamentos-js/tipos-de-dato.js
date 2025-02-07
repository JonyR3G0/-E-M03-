/* 
En este archivo agrega el código para imprimir en la consola los distintos tipos de datos que existen en JS. Como ejemplo tenemos: 'console.log(typeof 42);'. Esta intrucción debería imprimir en consola 'number' ya que el número 42 es del tipo 'number' en JavaScript.
Agrega uno o varios ejemplos para los siguientes valores y que se imprima a qué tipo de dato pertenecen dichos valores, justo como en el ejemplo anterior. Los valores son:
42
'Veinticinco'
-666
true
0
''
null
undefined
FALSE
Agrega tus propios ejemplos y experimenta con algunos valores y sus tipos de datos.
*/

//Quiero hacer que se vaya alterando el valor de la funcion mientras se va imprimiendo, para saber si una variable puede cambiar de tipo de dato sin lanzar errores

var variable_universal = 42

//Un poco de toque estetico
console.log(' ')
console.log('===================> Ejercicio #00 -> Tipos de variables primitivas en JS <- <===================')
console.log(' ')

//Usamos el comando console.log para imprimir en la consola. use la concatenacion de datos que menciono el sensei, usando ,
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = 'Veinticinco'
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = -666
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = true
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = 0
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = '"'
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = null
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = undefined
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
variable_universal = false
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);

//Ahora un poco de codigo experimental (por curiosidad)
console.log(' ')
console.log("=============> Tipos de datos extra <=============")
console.log(' ')
//Operador de exponeciacion segun: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Exponentiation
variable_universal = 9**70
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
//Interesante, ya que pense que lo calificaria como un bigint. Intentemos con algo mas alto
variable_universal = 9**999
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
//Entonces, que aplica como un BigInt?
variable_universal = 123412341234214n
console.log("! El dato de la variable actual es: |", variable_universal, '| El cual es un tipo de dato | ---> |', typeof variable_universal);
//Ya, viendo la documentacion al agregar una n al final, o llamar la funcion bigint()
var inmovible = Symbol(123)
console.log("! El dato de la variable actual es: |", inmovible, '| El cual es un tipo de dato | ---> |', typeof inmovible);
