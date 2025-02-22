/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */



/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/


// Imprime el numero de elementos del objeto

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.entries(student).length)
